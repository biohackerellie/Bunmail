# 📬 BunMail

![Logo](./public/BunMailLogo.png)

## Table of Contents

- [📖 Read the Docs](#-read-the-docs)
- [🚀 Quick Start](#-quick-start)
  - [With Docker Compose (Recommended)](#with-docker-compose-recommended)
    - [Create the Docker Compose File](#1-create-the-docker-compose-file)
    - [Edit Environment Variables](#2-edit-environment-variables)
    - [Run Docker Compose](#3-run-docker-compose)
- [🤔 Questions or Issues?](#-questions-or-issues)

---

Hey there, welcome to BunMail! This is a nifty little email server designed to securely send emails via POST requests. Plus, it's built on Bun! Cool, right?

## 📖 Read the Docs

You can find the full documentation [here](https://docs.epklabs.com/BunMail)

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

## 🤔 Questions or Issues?

Feel free to open an issue or submit a pull request. Any contributions are welcome!

---
