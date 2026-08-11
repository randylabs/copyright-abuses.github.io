# copyright-abuses.com — container image for the Kubernetes deployment.
#
# The site is Nuxt 3 with `ssr: false`, so `nuxi generate` prerenders it to a
# fully static bundle under `.output/public`. No Node runtime is needed at
# serve time: a stage-2 nginx serves the static files on :80. A VM-hosted Caddy
# reverse-proxies public traffic to this container's Service (see the chart).

# ── Build stage: static generate ─────────────────────────────────────────────
FROM node:20-alpine AS build
WORKDIR /app

# Install against the lockfile first for better layer caching.
COPY package.json package-lock.json ./
RUN npm ci

# Build. Output lands in /app/.output/public — NOT ./dist (the tracked `dist`
# symlink points at a developer's machine and is broken anywhere else; it is
# excluded via .dockerignore so it can't shadow the real output either).
COPY . .
RUN npm run generate

# ── Runtime stage: nginx serving the static export ───────────────────────────
FROM nginx:alpine AS runtime

# SPA-aware routing: exact file → clean-URL dir → Nuxt's 200.html shell.
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

# Ship only the generated static site.
COPY --from=build /app/.output/public /usr/share/nginx/html

EXPOSE 80
# nginx:alpine's default CMD runs nginx in the foreground.
