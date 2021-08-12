FROM node:16-alpine3.11

RUN mkdir -p /usr/src/ares

WORKDIR /usr/src/ares

COPY . /usr/src/ares

RUN yarn install --production

RUN yarn build

EXPOSE 3333

CMD ["yarn", "start"]
