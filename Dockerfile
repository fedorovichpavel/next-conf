FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn build

FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html
COPY /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf