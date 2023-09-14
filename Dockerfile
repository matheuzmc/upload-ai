FROM node:18-slim

WORKDIR /home/node/app

COPY . .

WORKDIR /home/node/app/

RUN npm install

USER node