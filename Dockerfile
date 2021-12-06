FROM node:14

WORKDIR /usr/app

COPY package*.json ./

# RUN npm install

RUN npm i -g @nestjs/cli

COPY . .

EXPOSE 3333

CMD ["npm","run","start:dev"] && ["npm","run","typeorm migration:run"]