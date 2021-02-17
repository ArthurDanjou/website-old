FROM node:14

EXPOSE 3333

WORKDIR /usr/src/artsite

COPY package.json package.json

RUN yarn build

COPY . .

CMD ["yarn", "start"]
