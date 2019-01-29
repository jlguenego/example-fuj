import * as path from 'path';

export const config = {
    keyFile: path.resolve('/certificates/privkey.pem'),
    crtFile: path.resolve('/certificates/fullchain.pem'),
    hostHttpsPort: 20443
};
