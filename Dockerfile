FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV NODE_ENV production
ENV PORT 8080

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app

EXPOSE 8080
CMD ["npm", "start"]
