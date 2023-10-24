# 📬 BunMail Express

Hey there, welcome to BunMail Express! This is a nifty little email server designed to securely send emails via POST requests. Plus, it's built on Bun! Cool, right?

## 🚀 Quick Start

Getting started is as simple as 1, 2, 3!

### 1. **Clone this Repo**

```bash
git clone https://github.com/biohackerellie/bunmail-express.git
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
```

### 3. Run Docker Compose

```bash
cd bunmail-express/ &&
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
