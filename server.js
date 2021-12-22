const app = require('./utils/express');
const logger = require('./utils//logs');
const { initConnection } = require('./utils//mongoose');
const port = process.env.PORT || 8080;
initConnection();

app.listen(port , () => logger.info(`Lisining to Server : ${port}`));