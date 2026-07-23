FROM node:20

WORKDIR /app
COPY package*.json ./ 
RUN npm install
COPY . . 
COPY .env.example .env
EXPOSE 9000
CMD [ "npm","start" ]