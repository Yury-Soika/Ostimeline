FROM node:8
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# To handle 'not get uid/gid'
RUN npm config set unsafe-perm true
RUN npm install
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 8080
CMD [ "npm", "run", "build" ]
