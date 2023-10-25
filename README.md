# 📬 BunMail

## Table of Contents

- [🚀 Quick Start](#-quick-start)
  - [With Docker Compose (Recommended)](#with-docker-compose-recommended)
    - [Create the Docker Compose File](#1-create-the-docker-compose-file)
    - [Edit Environment Variables](#2-edit-environment-variables)
    - [Run Docker Compose](#3-run-docker-compose)
  - [Docker Run Command](#docker-run-command)
  - [Without Docker](#without-docker)
- [💌 How to Send Emails](#-how-to-send-emails)
- [🔒 Security](#-security)
- [🐳 Docker](#-docker)
- [🤔 Questions or Issues?](#-questions-or-issues)

---

Hey there, welcome to BunMail! This is a nifty little email server designed to securely send emails via POST requests. Plus, it's built on Bun! Cool, right?

## 🚀 Quick Start

Getting started is made easy with Docker! But no matter which route you choose, you will need to generate your own API key. You can do this by running the following command:

```bash
openssl rand -hex 32
```

### With Docker Compose (Recommended)

#### 1. **Create the Docker Compose File**

```yaml
version: '3'

services:
  server:
    image: biohackerellie/bunmail
    container_name: BunEmailServer
    restart: unless-stopped
    ports:
      - '6969:6969'
    environment:
      API_KEY: ${API_KEY}
      GMAIL_USER: ${GMAIL_USER}
      GMAIL_PASSWORD: ${GMAIL_PASSWORD}
      ALLOWED_DOMAINS: ${ALLOWED_DOMAINS}
      # --- For Oauth2 ---
      OAUTH: ${OAUTH}
      CLIENT_ID: ${CLIENT_ID}
      CLIENT_SECRET: ${CLIENT_SECRET}
      REFRESH_TOKEN: ${REFRESH_TOKEN} #Optional
      ACCESS_TOKEN: ${ACCESS_TOKEN} #Optional
```

#### 2. Edit Environment Variables

- Option A: Create a `.env` file based on the provided `env.example` and fill in your own values. Keep the .env file in the same directory as the docker-compose.yml file.
- Option B: You can also directly edit the docker-compose.yml file if you'd rather:

```yaml
environment:
  API_KEY: Your-API-Key-Here
  GMAIL_USER: Your-Email-Here
  GMAIL_PASSWORD: Your-Password-Here
  ALLOWED_DOMAINS: Domain1,Domain2,Domain3 # or '*' for all domains
	OUATH: 'true' or 'false' # Default is false
  ### others as needed. See docs for configuring email providers
```

#### 3. Run Docker Compose

```bash
sudo docker compose up -d
```

That's it! Your server will be up and running at `http://localhost:6969`.

### Docker Run Command

You can also use the following docker run command instead of using docker compose:

```bash
docker run -p 6969:6969 \
-e API_KEY=Your-API-Key-Here \
-e GMAIL_USER=Your-Email-Here \
-e GMAIL_PASSWORD=Your-Password-Here \
-e ALLOWED_DOMAINS=Domain1,Domain2,Domain3 # or '*' for all domains \
 # --- Outh2 env variables if needed ---
biohackerellie/bunmail
```

### Without Docker

Alternatively, you can run the server without Docker. Just follow these steps:

1. Clone the repo
   ```bash
   git clone https://github.com/biohackerellie/Bunmail.git
   ```
2. Install Bun and the dependencies
   ```bash
   cd Bunmail \
   # Install Bun
   curl -fsSL https://bun.sh/install | bash && \
   # Install dependencies
   bun install
   ```
3. Create a `.env` file based on the provided `env.example` and fill in your own values.

4. Run the server
   ```bash
   bun run ./index.ts
   ```

## 💌 How to Send Emails

Send a POST request to `http://localhost:6969/email` with the following JSON body:

```json
{
	"key": "Your-API-Key-Here",
	"to": "recipient@example.com",
	"from": "sender@example.com",
	"subject": "Hello, World!",
	"html": "<h1>Hi there!</h1>"
}
```

If everything's set up correctly, you'll get a sweet message back saying "Email Sent Successfully" 🎉.

## 🤔 Questions or Issues?

Feel free to open an issue or submit a pull request. Any contributions are welcome!

---
