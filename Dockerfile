FROM node:15.8.0-alpine3.10

RUN mkdir -p /usr/src/ares
WORKDIR /usr/src/ares

COPY . /usr/src/ares

RUN yarn install

RUN yarn build

RUN cp .env build

EXPOSE 3333

COPY . .

CMD ["yarn", "start"]
