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
			src="./images/AIcard.png"
			height="250"
			cover
		></v-img>



    <v-card-item>
      <v-card-title>AI Technology</v-card-title>
			<v-card-subtitle>AI is the new oil</v-card-subtitle>
    </v-card-item>

    <v-card-text>
		<p><b>Sztuczna Inteligencja (AI)</b> to technologia, która naśladuje ludzkie procesy myślowe. AI może uczyć się, analizować dane i podejmować decyzje. Wdrożenie AI w firmie może przynieść wiele korzyści. Oferujemy kompleksowe rozwiązania AI, które mogą pomóc w automatyzacji procesów, poprawie efektywności i zwiększeniu zysków. 
		Nasza oferta obejmuje personalizację usług, analizę danych klienta i prognozowanie trendów. Zapewniamy pełne wsparcie techniczne i szkolenia dla pracowników. Wejdź do świata AI, ale tylko z przewodnikiem takim jak my.</p>
    </v-card-text>

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
    more() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
