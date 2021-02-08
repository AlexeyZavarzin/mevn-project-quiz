import config from "./config/config";

const mongoose = require('mongoose');

mongoose.Promise = global.Promise

mongoose.connect(config.dbURL, config.dbOptions)
mongoose.connection
    .once('open', () => {
        console.log(`Mongoose - successful connection ...`)
        app.listen(process.env.PORT || config.port,
            () => console.log(`Server start on port ${config.port} ...`))
    })
    .on('error', error => console.warn(error))