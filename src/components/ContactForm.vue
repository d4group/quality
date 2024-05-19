<template>
		<div>
	<form @submit.prevent="submit">
		
	  <v-text-field
		v-model="name.value.value"
		:counter="10"
		:error-messages="name.errorMessage.value"
		name="name"
		label="Name"
	  ></v-text-field>
  
	  <v-text-field
		v-model="phone.value.value"
		:counter="7"
		:error-messages="phone.errorMessage.value"
		label="Phone Number"
		name="phone"
	  ></v-text-field>
  
	  <v-text-field
		v-model="email.value.value"
		:error-messages="email.errorMessage.value"
		label="E-mail"
		name="email"
	  ></v-text-field>
  
	  <v-select
		v-model="select.value.value"
		:error-messages="select.errorMessage.value"
		:items="items"
		name="select"
		label="Select"
	  ></v-select>
  
	  <v-checkbox
		v-model="checkbox.value.value"
		:error-messages="checkbox.errorMessage.value"
		label="Option"
		name="checkbox"
		type="checkbox"
		value="1"
	  ></v-checkbox>
  
	  <v-btn @click="submit"
		class="me-4"
		type="submit"
	  >
		submit
	  </v-btn>
  
	  <v-btn @click="handleReset">
		clear
	  </v-btn>
	</form>



	</div>
  </template>


<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import axios from 'axios';

const { handleSubmit, handleReset } = useForm({
  // ...
})
const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const select = useField('select')
const checkbox = useField('checkbox')

const items = ref([
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
])

const submit = handleSubmit(async () => {
  const formData = {
    name: name.value.value,
    phone: phone.value.value,
    email: email.value.value,
    select: select.value.value,
    checkbox: checkbox.value.value
  };

  console.log(formData);

  // Użyj axios do wysłania danych formularza do serwera
  axios.post('http://localhost:3000/send-email', formData)
  .then(response => {
    console.log('Sukces:', response.data);
  })
  .catch((error) => {
    console.error('Błąd:', error);
  });
});
</script>
