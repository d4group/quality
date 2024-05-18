<template>
	<form @submit.prevent="submit">
	  <v-text-field
		v-model="name.value.value"
		:counter="10"
		:error-messages="name.errorMessage.value"
		label="Name"
	  ></v-text-field>
  
	  <v-text-field
		v-model="phone.value.value"
		:counter="7"
		:error-messages="phone.errorMessage.value"
		label="Phone Number"
	  ></v-text-field>
  
	  <v-text-field
		v-model="email.value.value"
		:error-messages="email.errorMessage.value"
		label="E-mail"
	  ></v-text-field>
  
	  <v-select
		v-model="select.value.value"
		:error-messages="select.errorMessage.value"
		:items="items"
		label="Select"
	  ></v-select>
  
	  <v-checkbox
		v-model="checkbox.value.value"
		:error-messages="checkbox.errorMessage.value"
		label="Option"
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
  </template>

  <script setup>
  import { ref } from 'vue'
  import { useField, useForm } from 'vee-validate'
  import axios from 'axios';

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      name (value) {
        if (value?.length >= 2) return true

        return 'Name needs to be at least 2 characters.'
      },
      phone (value) {
        if (value?.length > 9 && /[0-9-]+/.test(value)) return true

        return 'Phone number needs to be at least 9 digits.'
      },

      select (value) {
        if (value) return true

        return 'Select an item.'
      },
      checkbox (value) {
        if (value === '1') return true

        return 'Must be checked.'
      },
    },
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
    name: name.value,
    phone: phone.value,
    email: email.value,
    select: select.value,
    checkbox: checkbox.value
  };

 try {
    const response = await axios.post('http:/localhost:3000//send-email', formData);
    alert('E-mail został wysłany pomyślnie.');
  } catch (error) {
    alert('Nie udało się wysłać e-maila.');
  }
});
</script>