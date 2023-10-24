# 📬 BunMail

Hey there, welcome to BunMail! This is a nifty little email server designed to securely send emails via POST requests. Plus, it's built on Bun! Cool, right?

## 🚀 Quick Start

Getting started is as simple as 1, 2, 3!

### 1. **Create the Docker Compose File**

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
      OAUTH: ${OAUTH}
      CLIENT_ID: ${CLIENT_ID}
      CLIENT_SECRET: ${CLIENT_SECRET}
      REFRESH_TOKEN: ${REFRESH_TOKEN}
      ACCESS_TOKEN: ${ACCESS_TOKEN}

```

### 2. Edit Environment Variables

- Option A: Create a `.env` file based on the provided `env.example` and fill in your own values.
- Option B: You can also directly edit the docker-compose.yml file if you'd rather:

```yaml
environment:
  API_KEY: Your-API-Key-Here
  GMAIL_USER: Your-Email-Here
  GMAIL_PASSWORD: Your-Password-Here
  ALLOWED_DOMAINS: Domain1,Domain2,Domain3 # or * for all domains
  ### others as needed. See docs for configuring email providers
```

#### 3. Run Docker Compose

```bash
sudo docker compose up -d
```

That's it! Your server will be up and running at `http://localhost:6969`.

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

## 🔒 Security

BunMail Express uses CORS to control which domains can send requests. You can easily configure this by updating the ALLOWED_DOMAINS environment variable. Want to allow any domain? Just set it to \*.

## 🐳 Docker

Yep, this project is Docker-friendly! Just follow the Quick Start guide above and you'll have a containerized email server running in no time.

## 🤔 Questions or Issues?

Feel free to open an issue or submit a pull request. Any contributions are welcome!

---
