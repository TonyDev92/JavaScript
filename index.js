const winston = require('winston')
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    
    ],
});

const nombre = val => {
    if( typeof val === "String"){
        return "Hola" + " " + val;
    }
    throw new Error("Para esta función debe introducir una cadena de texto");
};

const datoErroneo = 42;
try {
    const otroNombre = nombre(datoErroneo);
    console.log(otroNombre);
} catch(e) {
    logger.error("ERROR!");
};





