import * as path from 'path';

export const config = {
    keyFile: path.resolve('/etc/letsencrypt/live/vps.jlg-consulting.com/privkey.pem'),
    crtFile: path.resolve('/etc/letsencrypt/live/vps.jlg-consulting.com/fullchain.pem'),
    hostHttpsPort: 20443
};
