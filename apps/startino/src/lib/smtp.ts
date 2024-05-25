import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

type SMTPOptions = {
	host: string;
	port: number;
	user: string;
	pass: string;
};
export const createSMPTransport = ({ host, port, user, pass }: SMTPOptions) => {
	const transporter = nodemailer.createTransport({
		host,
		port,
		secure: false,
		auth: {
			user,
			pass
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	const handlebarOptions = {
		viewEngine: {
			partialsDir: path.resolve('./src/email-templates/'),
			defaultLayout: false
		},
		viewPath: path.resolve('./src/email-templates/')
	};

	transporter.use('compile', hbs(handlebarOptions));

	return transporter;
};
