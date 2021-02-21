import express from 'express';

import config from './config';

const app = express();

// Settings
app.set('port', config.APP_PORT || 3003);

// Middlewares

// Routes

// Static Files

export default app;
