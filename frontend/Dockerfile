FROM node:20 as builder
WORKDIR /app

# Copy package files
COPY package*.json ./

# Copy .env BEFORE npm install and build
COPY .env ./

RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build React
RUN npm run build

# Serve build with nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
