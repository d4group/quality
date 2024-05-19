import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = 3000;

// Middleware do parsowania ciała żądania
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Endpoint POST /send-mail
app.post('/send-email', async (req, res) => {
	const { name, phone, email, select, checkbox } = req.body;
	console.log('Otrzymane dane:', req.body);

	// Konfiguracja transportu dla nodemailer
	const transporter = nodemailer.createTransport({
		//service: 'gmail', // Zastąp to swoim dostawcą usług pocztowych
		host: 'ssl0.ovh.net',
		port: 465,
		secure: true,
		auth: {
			user: 'contact@d4quality.pl', // Zastąp to swoim adresem e-mail
			pass: 'Tomazino2' // Zastąp to swoim hasłem
		}
	});

	// Opcje wiadomości e-mail	
	const mailOptions = {
		from: 'contact@d4quality.pl',
		to: 'contact@d4quality.pl', // Adres e-mail odbiorcy - moj adres e-mail z formularza
		subject: `Nowa wiadomość od ${req.body.name}`,
		text: `Telefon: ${req.body.phone}\nE-mail: ${req.body.email}\nWybrana opcja: ${req.body.select}\nZaznaczone: ${req.body.checkbox}`
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			return res.status(500).send('Nie udało się wysłać e-maila');
		}
		res.status(200).send('E-mail został wysłany pomyślnie.');
	});
});

// app.post('/send-email', (req, res) => {
// 	const { name, phone, email, select, checkbox } = req.body;
// 	const mailOptions = {
// 		from: req.body.email,
// 		to: 'testowe@borowik.pro', // Adres e-mail odbiorcy
// 		subject: `Nowa wiadomość od ${req.body.name}`,
// 		text: `Telefon: ${req.body.phone}\nE-mail: ${req.body.email}\nWybrana opcja: ${req.body.select}\nZaznaczone: ${req.body.checkbox}`
// 	};
// 	console.log(req.body);
// 	transporter.sendMail(mailOptions, (error, info) => {
// 		if (error) {
// 			return res.status(500).send('Nie udało się wysłać e-maila');
// 		}
// 		res.status(200).send('E-mail został wysłany pomyślnie.');
// 	});
// });


// Uruchomienie serwera
app.listen(PORT, () => {
	console.log(`Serwer nasłuchuje na porcie ${PORT}`);
});