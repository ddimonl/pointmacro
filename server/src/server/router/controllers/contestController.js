const models = require('../../models/index');

module.exports.createContest = (req, res, next) => {
    models.Project.build({
        userId: req.params.userId
    }).save()
    .then(createdProject => {
        req.body.projectId = createdProject.id;
        models.Contest.build(req.body).save()
            .then(contest => {
                res.send(contest);
            })
            .catch(err => {
                res.send(err);
            })
    })
    .catch(err => {
        console.log(err);
        res.send(err);
    })
};

/*
module.exports.getContest = (req, res, next) => {
    const id = req.headers['user'];

   /!* models.Project.findAll({where: { userId: id }})
        .then(r => {
            res.send(r);
            const status = req.params.status.toUpperCase();

            models.Contest.findAll({where: {status: status }})
                .then(result => {
                    if (result) {
                        res.send(result);
                    }
                })
                .catch(err => {
                    res.send(err);
                })
        }).catch(err => res.send(err))*!/
   models.Contest.findAll({})
};
*/


module.exports.getContest = (req, res, next) => {
    const id = req.headers['user'];
    const status = req.params.status.toUpperCase();

    models.User.findAll({
        include: [{
            model: models.Project,
            include: [{
                model: models.Contest
            }]
        }]
    }).then(result => res.send(result));
};

/**************************/
module.exports.getActiveContests = (req,res, next) => {
    models.Contest.findAll({where: {status: "ACTIVE" }})
        .then(result => {
            if (result) {
                res.send(result);
            }
        })
        .catch(err => {
            res.send(err);
        })
};

//make contest inactive
module.exports.changeContestStatus = (req, res, next) => {
  models.Contest.find({ where: { id: req.params.contestId }})
      .then((project) => {
          if(project) {
              project.update({status: "ENDED"})
                  .then(result => {
                      res.send(result);
                  })
                  .catch(err => {
                      res.send(err);
                  })
          }
          res.send(project);
      })
      .catch(err => {res.send(err)})
};




