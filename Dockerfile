# ---------- builder ----------
FROM node:20-alpine AS builder
WORKDIR /app

# copy only package manifests first for caching
COPY package*.json ./

# install full deps (dev + prod) so Next can compile TS config
RUN npm ci

# copy rest of source
COPY . .

# build Next app
RUN npm run build

# ---------- runtime ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

# copy built output and package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# install only production deps in final image (keeps image smaller)
RUN npm ci --omit=dev

# disable telemetry (optional)
ENV NEXT_TELEMETRY_DISABLED=1

CMD ["npm", "run", "start"]
