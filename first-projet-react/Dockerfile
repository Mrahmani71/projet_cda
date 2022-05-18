FROM node:18.1.0-alpine

ENV VITE_NODE_ENV=production
ENV VITE_API=0ff1f1d3219100085377002952db296f

WORKDIR /usr/src/app
 
COPY package*.json ./
 
RUN npm install
 
COPY . .

RUN npm run build
 
EXPOSE 4173
 
CMD npm run preview
