FROM oven/bun:latest

WORKDIR /app
COPY . .

RUN  bun install --frozen-lockfile --production

EXPOSE 6969/tcp

ENTRYPOINT ["bun", "run", "index.ts"]