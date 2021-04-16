FROM node:15.8.0-alpine3.10

RUN mkdir -p /usr/src/artsite
WORKDIR /usr/src/artsite

COPY . /usr/src/artsite

RUN yarn install

RUN yarn build

EXPOSE 3333

COPY . .

CMD ["yarn", "start"]
