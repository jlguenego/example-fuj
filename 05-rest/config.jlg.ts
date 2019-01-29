import * as path from 'path';

export const config = {
    keyFile: path.resolve('/certificate/privkey.pem'),
    crtFile: path.resolve('/certificate/fullchain.pem'),
    hostHttpsPort: 20443
};
