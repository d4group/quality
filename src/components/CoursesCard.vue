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
		src="https://pilbox.themuse.com/image.png?filter=antialias&h=350&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2Fjobs-for-teachers-over-it.png&w=700"
		cover
	  ></v-img>
  
	  <v-card-item>
		<v-card-title>Szkolenia IT</v-card-title>
  
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
		<!-- <v-row
		  align="center"
		  class="mx-0"
		>
		  <v-rating
			:model-value="4.5"
			color="amber"
			density="compact"
			size="small"
			half-increments
			readonly
		  ></v-rating>
  
		  <div class="text-grey ms-4">
			4.5 (413)
		  </div>
		</v-row> -->
  
<v-row>

		<div>Odkryj moc technologii z naszymi szkoleniami IT! Nasze kursy, prowadzone przez doświadczonych specjalistów, zapewniają najnowszą wiedzę techniczną. Bez względu na to, czy jesteś nowicjuszem czy doświadczonym profesjonalistą, mamy coś dla Ciebie. Nasze szkolenia IT pomogą Ci zrozumieć złożoność technologii, zwiększyć efektywność i przyspieszyć rozwój kariery. Dołącz do nas i przekształć swoje umiejętności w praktyczne rozwiązania. Zarezerwuj miejsce już dziś!</div>
</v-row>
  
	  </v-card-text>
  
	  <v-divider class="mx-4 mb-1"></v-divider>
  
  
	  <!-- <v-card-actions>
		<v-btn
		  color="deep-purple-lighten-2"
		  variant="text"
		  @click="more"
		>
		  More
		</v-btn>
	  </v-card-actions> -->
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
  