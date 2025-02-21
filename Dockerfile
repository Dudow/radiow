FROM node:22-alpine

WORKDIR ./

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
