import { Elysia, t } from 'elysia';
import { Sender } from '@/functions/sender';
import { cors } from '@elysiajs/cors';

//get the allowed domains from the .env file, and split them into an array

const corsOrigins = process.env.ALLOWED_DOMAINS?.split(',') || [];
// check if the array includes a wildcard, if so, set the finalOrigins to '*', then add common local network ips to the array
const finalOrigins = corsOrigins.includes('*')
	? '*'
	: [...corsOrigins, /^10\.\d\.\d+\.\d+$/, /^192\.168\.\d+\.\d+$/];

const app = new Elysia()
	// validate the request body
	.guard({
		body: t.Object({
			key: t.String(),
			to: t.String(),
			from: t.String(),
			subject: t.String(),
			html: t.String(),
		}),
	})
	// enable cors
	.use(
		cors({
			origin: finalOrigins,
			methods: ['GET', 'POST'],
		})
	)
	// handle errors
	.onError(({ code, error }) => {
		console.log(error.toString());
		return new Response(error.toString());
	})
	// handle routes
	.get('/', ({ request, set }) => {
		console.log(request);
		set.status = 404;
		return 'Not Found';
	})
	.post('/email', ({ request, body, set }) => {
		console.log(request);
		// check if the key is correct
		const authorized = body.key === process.env.API_KEY;
		// if not, return a 403 error
		if (!authorized) {
			set.status = 403;
			return 'Unauthorized';
		}
		// if so, send the email
		try {
			Sender(body);
			set.status = 200;
			return 'Email Sent Successfully';
		} catch (error) {
			console.log(error);
			set.status = 500;
			throw new Error('Something went wrong');
		}
	})
	// start the server on port 6969
	.listen(6969);

console.log(
	`💩 server is running at ${app.server?.hostname} : ${app.server?.port}`
);
