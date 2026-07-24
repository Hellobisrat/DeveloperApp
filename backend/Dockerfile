FROM node:20 AS deps

WORKDIR /app
COPY package*.json ./ 
RUN npm install --production=false


FROM node:20-slim As prod-deps
WORKDIR /app
COPY package*.json ./
RUN npm install --production

FROM node:20-slim  AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules 

FROM node:20-slim AS production
WORKDIR /app

COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/controllers ./controllers
COPY --from=builder /app/models ./models
COPY --from=builder /app/routes ./routes
COPY --from=builder /app/config ./config
COPY --from=builder /app/utils ./utils


EXPOSE 9000
CMD [ "npm","start" ]