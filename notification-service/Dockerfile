FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

COPY src ./src

# No public port needed (consumer service)
CMD ["node", "src/app.js"]
