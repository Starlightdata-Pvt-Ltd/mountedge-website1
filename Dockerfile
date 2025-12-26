# Stage 1: install prod deps (faster layer caching)
FROM node:20-alpine AS deps
WORKDIR /app
# only copy package manifests
COPY package*.json ./
# install production deps
RUN npm ci --omit=dev

# Stage 2: build
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
# copy prod node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
# build Next app
RUN npm run build

# Stage 3: runtime
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# copy only what's needed
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Cloud Run provides PORT via env var; default 8080
ENV PORT=8080
EXPOSE 8080

# disable telemetry (optional)
ENV NEXT_TELEMETRY_DISABLED=1

# start the Next production server (reads $PORT)
CMD ["npm", "run", "start"]
