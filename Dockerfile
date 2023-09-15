FROM node:18-slim

WORKDIR /home/node/app

COPY . .

USER node