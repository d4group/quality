import axios from "axios";

const request = axios.create({
	baseURL: "http://localhost:3000",
	// headers: {
	// 	"Content-Type": "application/json",
	// },
});

try	{
	const { data } = await request.post("/api/auth/login", {
		email: "<EMAIL>",
		password: "<PASSWORD>",
	});
	console.log(data);
} catch (error) {
	console.log(error);
}