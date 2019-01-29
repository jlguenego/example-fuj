import * as path from 'path';

export const config = {
    keyFile: path.resolve(__dirname, './config-https/out/server.key'),
    crtFile: path.resolve(__dirname, './config-https/out/server.crt'),
    hostHttpsPort: undefined,
};
