export type AuthOptions = {
	user: string;
	pass?: string | '';
};

export type OauthOptions = {
	type?: string;
	user: string;
	clientId?: string;
	clientSecret?: string;
	refreshToken?: string | '';
	accessToken?: string | '';
};

export const authOptions: AuthOptions = {
	user: process.env.EMAIL_USER as string,
	pass: process.env.EMAIL_PASSWORD as string,
};

export const oauthOptions: OauthOptions = {
	type: 'OAuth2',
	user: process.env.EMAIL_USER as string,
	clientId: (process.env.EMAIL_CLIENT_ID as string) || '',
	clientSecret: (process.env.EMAIL_CLIENT_SECRET as string) || '',
	refreshToken: (process.env.EMAIL_REFRESH_TOKEN as string) || '',
	accessToken: (process.env.EMAIL_ACCESS_TOKEN as string) || '',
};
