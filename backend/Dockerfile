FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./ 
RUN npm install --production=false
COPY . . 

FROM node:20-slim As production
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app .

EXPOSE 9000
CMD [ "npm","start" ]