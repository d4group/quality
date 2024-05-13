<template>
	<v-card
	  :loading="loading"
	  class="mx-auto my-12"
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
		src="./images/english.png"
		cover
	  ></v-img>
  
	  <v-card-item>
		<v-card-title>Język angielski</v-card-title>
  
		<!-- <v-card-subtitle>
		  <span class="me-1">Local Favorite</span>
  
		  <v-icon
			color="error"
			icon="mdi-fire-circle"
			size="small"
		  ></v-icon>
		</v-card-subtitle> -->
	  </v-card-item>
  
	  <v-card-text>
		<p>			
			Odkryj świat języka angielskiego z nami! Nasze indywidualne lekcje są dostosowane do Twoich potrzeb. Czy to gramatyka, konwersacje czy przygotowanie do egzaminów – z nami osiągniesz płynność i pewność siebie. Zacznij swoją przygodę z angielskim już dziś i otwórz drzwi do globalnych możliwości. 
			Rozumiemy, jak ważna jest znajomość języka angielskiego w dzisiejszym globalnym świecie. Dlatego oferujemy naukę języka angielskiego dla osób na różnych poziomach zaawansowania. Nasze lekcje są prowadzone przez doświadczonych nauczycieli, którzy pomogą Ci poprawić swoje umiejętności językowe i zwiększyć pewność siebie. Zawsze stawiamy na indywidualne podejście dzięki czemu nauka u nas jest lepsza niż u konkurencji.	Zapisz się teraz i poczuj różnicę!		
		</p>
	  </v-card-text>

	
  
	  <v-divider class="mx-4 mb-1"></v-divider>
  
  
	  <!-- <div class="px-4">
		<v-chip-group v-model="selection">
		  <v-chip>5:30PM</v-chip>
		</v-chip-group>
	  </div> -->
  
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
  