import dotenv from 'dotenv';
import server from './src/server';
import { LogError, LogSuccess } from './src/utils/logger';
import { error } from 'console';

// configuracion del .env
dotenv.config();

const port = process.env.PORT || 8000


// Ejecutar servidor

server.listen(port, () => {
    LogSuccess(`[SERVER ON]: Se encuentra corriendo en http://localhost:${port}`);
})

//* Server error
server.on('error', (error) => {
    LogError(`[SERVER ERROR]: ${error}`);
})

