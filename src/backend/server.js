import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
	//service: 'gmail', // Zastąp to swoim dostawcą usług pocztowych
	host: 'borowikpro.nazwa.pl',
	port: 587,
	secure: false,
	auth: {
		user: 'testowe@borowik.pro', // Zastąp to swoim adresem e-mail
		pass: 'tomaszDIAKOWSKI11!' // Zastąp to swoim hasłem
	}
});

app.post('/send-email', (req, res) => {
	const { name, phone, email, select, checkbox } = req.body;
	const mailOptions = {
		from: email,
		to: 'testowe@borowik.pro', // Adres e-mail odbiorcy
		subject: `Nowa wiadomość od ${name}`,
		text: `Telefon: ${phone}\nE-mail: ${email}\nWybrana opcja: ${select}\nZaznaczone: ${checkbox}`
	};
	console.log(req.body);
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			return res.status(500).send('Nie udało się wysłać e-maila');
		}
		res.status(200).send('E-mail został wysłany pomyślnie.');
	});
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Serwer działa na porcie - ${PORT}`);
});
