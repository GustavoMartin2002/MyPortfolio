FROM node:20-alpine AS builder
WORKDIR /app
COPY package.*json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:20-alpine
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=builder app/package.json ./
COPY --from=builder app/node_modules ./node_modules
COPY --from=builder app/.next ./.next
COPY --from=builder app/next.config.js ./
COPY --from=builder app/public ./public
EXPOSE 3002
CMD ["npm", "start"]