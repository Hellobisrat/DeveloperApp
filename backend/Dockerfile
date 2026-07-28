# Install all dependencies (dev)
FROM node:20 AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install --production=false

# Install only production dependencies
FROM node:20-slim AS prod-deps
WORKDIR /app
COPY package*.json ./
RUN npm install --production

# Build stage
FROM node:20-slim AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

# Final production image
FROM node:20-slim AS production
WORKDIR /app

# Copy production node_modules
COPY --from=prod-deps /app/node_modules ./node_modules

# Copy package.json (required for npm start)
COPY --from=builder /app/package*.json ./

# Copy backend source code
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/controllers ./controllers
COPY --from=builder /app/models ./models
COPY --from=builder /app/routes ./routes
COPY --from=builder /app/config ./config
COPY --from=builder /app/utils ./utils
COPY --from=builder /app/middleware ./middleware


EXPOSE 9000
CMD ["npm", "start"]

