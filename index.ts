import { Elysia, t } from 'elysia';
import { Sender } from '@/functions/sender';

import { cors } from '@elysiajs/cors';

const corsOrigins = process.env.ALLOWED_DOMAINS?.split(',') || [];
const finalOrigins = corsOrigins.includes('*')
	? '*'
	: [...corsOrigins, /^10\.\d\.\d+\.\d+$/, /^192\.168\.\d+\.\d+$/];

const app = new Elysia()
	.guard({
		body: t.Object({
			key: t.String(),
			to: t.String(),
			from: t.String(),
			subject: t.String(),
			html: t.String(),
		}),
	})
	.use(
		cors({
			origin: finalOrigins,
			methods: ['GET', 'POST'],
		})
	)
	.onError(({ code, error }) => {
		return new Response(error.toString());
	})
	.get('/', () => ({
		status: 404,
		body: 'Not Found',
	}))
	.post('/email', ({ body, set }) => {
		const authorized = body.key === process.env.API_KEY;

		if (!authorized) {
			set.status = 403;
			return 'Unauthorized';
		}
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

	.listen(6969);

console.log(
	`💩 server is running at ${app.server?.hostname} : ${app.server?.port}`
);
