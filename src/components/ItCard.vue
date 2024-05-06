<template>
	<v-card
	  :loading="loading"
	  class="mx-auto my-12"
	  max-width="374"
	>
	  <template v-slot:loader="{ isActive }">
		<v-progress-linear
		  :active="isActive"
		  color="deep-purple"
		  height="4"
		  indeterminate
		></v-progress-linear>
	  </template>
  
	  <v-img
		height="250"
		src="https://www.iamthecode.org/wp-content/uploads/2021/03/florian-olivo-4hbJ-eymZ1o-unsplash-scaled-e1616631053918.jpg"
		cover
	  ></v-img>
  
	  <v-card-item>
		<v-card-title>Usługi IT</v-card-title>
  
		<v-card-subtitle>
		  <span class="me-1">Local Favorite</span>
  
		  <v-icon
			color="error"
			icon="mdi-fire-circle"
			size="small"
		  ></v-icon>
		</v-card-subtitle>
	  </v-card-item>
  
	  <v-card-text>
	  
		<div>Zapraszamy do skorzystania z naszych usług IT! Oferujemy szeroki zakres usług, od zarządzania infrastrukturą IT, przez rozwój oprogramowania, po bezpieczeństwo sieciowe. Nasz zespół składa się z doświadczonych specjalistów, którzy są gotowi pomóc Ci zrealizować Twoje cele technologiczne. Nasze usługi IT są dostosowane do Twoich indywidualnych potrzeb, aby pomóc Ci osiągnąć maksymalną wydajność i efektywność. Skontaktuj się z nami już dziś, aby dowiedzieć się więcej i zacząć swoją podróż w świecie technologii!</div>
	  </v-card-text>
  
	  <v-divider class="mx-4 mb-1"></v-divider>
  
	 
  
	  <v-card-actions>
		<v-btn
		  color="deep-purple-lighten-2"
		  variant="text"
		  @click="more"
		>
		  More
		</v-btn>
	  </v-card-actions>
	</v-card>
  </template>
  <script>
	export default {
	  data: () => ({
		loading: false,
		selection: 1,
	  }),
  
	  methods: {
		more () {
		  this.loading = true
  
		  setTimeout(() => (this.loading = false), 2000)
		},
	  },
	}
  </script>
  