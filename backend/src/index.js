import express from 'express';

const app = express();

const APP_PORT = process.env.APP_PORT || '3000';
const APP_HOST = process.env.APP_HOST || '0.0.0.0';

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.locals.title = process.env.APP_NAME;
app.locals.version = process.env.APP_VERSION;

app.listen(app.get('port'), app.get('host'));
