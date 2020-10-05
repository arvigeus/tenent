# Do the npm install in the full image
FROM cypress/included:5.1.0 AS builder

WORKDIR /app
COPY . .
RUN npm ci

RUN npm run lint

RUN npm test

RUN npm run build

# And then copy over node_modules, etc from that stage to the smaller base image
FROM mhart/alpine-node:base
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]
