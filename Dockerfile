FROM node:16.8.0-alpine3.11

WORKDIR /app

COPY . .

RUN yarn install

CMD sh