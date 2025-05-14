FROM node:22.14.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=1337

EXPOSE 1337

CMD ["npm", "start"]