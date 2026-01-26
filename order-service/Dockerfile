FROM node:18-alpine

WORKDIR /usr/src/app

# Install curl for healthcheck
RUN apk add --no-cache curl

COPY package*.json ./
RUN npm install --only=production

COPY src ./src

EXPOSE 4001

CMD ["node", "src/app.js"]
