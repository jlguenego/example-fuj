FROM node:latest

# The directory will be created and use as current dir.
WORKDIR /usr/src/http-server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only=production
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 9000 9443
CMD [ "npm", "run", "docker:express" ]