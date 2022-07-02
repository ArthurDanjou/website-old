FROM node:16-alpine3.11

RUN mkdir -p /usr/src/website

WORKDIR /usr/src/website

COPY . /usr/src/website

RUN yarn install

RUN yarn build

EXPOSE 3333

CMD ["yarn", "start"]
