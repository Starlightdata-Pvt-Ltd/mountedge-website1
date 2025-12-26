# Stage 1: install production deps (cacheable, for final runtime)
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
# install only production deps for final image copy
RUN npm ci --omit=dev

# Stage 2: builder (install dev deps here so Next can build .ts config)
FROM node:20-alpine AS builder
WORKDIR /app
# copy everything for build
COPY . .
# Install full deps (dev + prod) for build step
RUN npm ci
# build Next app
RUN npm run build

# Stage 3: runtime
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

# copy only the built output and production node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# disable telemetry (optional)
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["npm", "run", "start"]
