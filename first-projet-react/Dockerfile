# FROM node:18.1.0-alpine

# ENV NODE_ENV=production

# WORKDIR /app

# RUN mkdir -p /opt/node_modules

# COPY ./package.json /app
# COPY ./package-lock.json /app

# RUN npm ci

# COPY ./ /app

# RUN npm run build

# EXPOSE 3000

# RUN chown -R node /app

# USER node

# CMD ["npm", "start"]

FROM node:18.1.0-alpine

WORKDIR /usr/src/app
 
COPY package*.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 3000
 
CMD [ "npm", "start" ]
