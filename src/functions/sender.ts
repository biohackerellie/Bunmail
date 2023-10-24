import { EmailRequest } from '@/lib/types';
import { authOptions, oauthOptions } from '@/lib/authOptions';

const nodemailer = require('nodemailer');
require('dotenv').config();

export async function Sender(body: EmailRequest) {
	let options = authOptions;

	if (process.env.OAUTH?.toLowerCase() === 'true') {
		options = oauthOptions;
	}
	console.log(options);
	if (body.key !== process.env.API_KEY) {
		return Response.json({ status: 401, body: 'Unauthorized' });
	}
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: options,
		});

		const email = await transporter.sendMail({
			from: `"${body.from}" ${process.env.EMAIL_USER}`,
			to: body.to,
			subject: body.subject,
			html: body.html,
		});

		return Response.json({ status: 200, body: 'Email Sent Successfully' });
	} catch (error) {
		console.log(error);
		return Response.json({ status: 500, body: error });
	}
}
