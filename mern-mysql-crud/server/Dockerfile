FROM node:latest

WORKDIR /home/node

COPY package.json ./

RUN npm install -f

RUN npm install -g nodemon

COPY . . 

ARG port

EXPOSE $port