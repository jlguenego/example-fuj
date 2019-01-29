import * as path from 'path';

export const config = {
    keyFile: path.resolve('/usr/src/certificate/privkey.pem'),
    crtFile: path.resolve('/usr/src/certificate/fullchain.pem'),
    hostHttpsPort: 20443
};
