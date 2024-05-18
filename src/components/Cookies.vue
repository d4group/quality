<template>
	<v-snackbar v-model="show">
	  Ta strona korzysta z plików cookies.
	  <v-btn color="blue" text @click="acceptCookies">
		Rozumiem
	  </v-btn>
	</v-snackbar>
  </template>
  
  <script>
  import Cookies from 'js-cookie'
  
  export default {
	data: () => ({
	  show: !Cookies.get('cookiesAccepted'),
	}),
	methods: {
	  acceptCookies() {
		this.show = false
		Cookies.set('cookiesAccepted', 'true', { expires: 365 }) // Ustawia ciasteczko na 1 rok
	  }
	}
  }
  </script>
  