import express from 'express';
import router from './server/router/index';
import cors from 'cors';
import bodyParser from 'body-parser';
const errorHandler = require('./server/utils/errorHandler/errorHandler');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use('/api', router);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log("APP LISTEN ON PORT " + PORT);
});


