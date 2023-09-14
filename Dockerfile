FROM node:18-slim

WORKDIR /home/node/app

COPY . .

WORKDIR /home/node/app/upload-ai-web

RUN npm install

USER node