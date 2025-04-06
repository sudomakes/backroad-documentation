FROM node:18-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build


# FROM lipanski/docker-static-website:latest

# COPY --from=builder /app/dist/  ./
# EXPOSE 4173
# CMD ["/busybox", "httpd", "-f", "-v", "-p", "4173", "-c", "httpd.conf"]


# FROM halverneus/static-file-server as runner
# WORKDIR /app
# COPY 
# # RUN npm ci --omit=dev
# ENTRYPOINT [ "/app" ]
# EXPOSE 8080
# CMD []

EXPOSE 4173
CMD ["npm","run","preview","--","--host","0.0.0.0","--port","4173"]