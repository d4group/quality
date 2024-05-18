darkModeClass<template>
	<v-row>
	  <v-col cols="12" xxl="12" sm="12" md="4">
		  <v-card>
			  <v-card-title>
				<h2 class="headline text-uppercase text-center title-red">Przeraża Cię AI </h2> <h3 class="headline text-center title-blue" > z D4 Quality to proste !</h3>
			  </v-card-title>
			  <v-card-subtitle>
				Odkryj nową erę innowacji z D4 Quality, gdzie sztuczna inteligencja spotyka się z doskonałością operacyjną. 
			  </v-card-subtitle>
			  <v-card-text>
				  AI to technologia, która naśladuje ludzkie procesy myślowe. AI może uczyć się, analizować dane i podejmować decyzje. Nasze rozwiązania AI są kluczem do przyszłości Twojej firmy. Wdrożenie AI w firmie może przynieść wiele korzyści. Oferujemy kompleksowe rozwiązania AI, które mogą pomóc w automatyzacji procesów, poprawie efektywności i zwiększeniu zysków. 
				  Nasza oferta obejmuje personalizację usług, analizę danych klienta i prognozowanie trendów. Zapewniamy pełne wsparcie techniczne i szkolenia dla pracowników.
			  </v-card-text>
			  <v-card-subtitle>
				<h2 class="title-blue" >Co nas wyróżnia?</h2>
			  </v-card-subtitle>
	
				<v-list>
					<v-list-item-group>
					<v-list-item
						v-for="(item, index) in items"
						:key="index"
					>
						<v-list-item-content>
						<v-list-item-title>{{ index + 1 }}. {{ item.title }}</v-list-item-title>
						<v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
					</v-list-item-group>
				</v-list>

			  <!-- <v-card-actions>
				  <v-btn color="deep-purple-lighten-2" @click="more">More</v-btn>
			  </v-card-actions>	 -->
		  </v-card>
		  
	  </v-col>		
	</v-row>
  </template>

  <style scoped>
	.title-red
	{
		color: red;
	}
	.title-blue
	{
		color: blue;
	}
  </style>

  <script>

export default {
  data() {
    return {
      items: [
        {
          title: 'Personalizacja na najwyższym poziomie',
          description: 'Każde rozwiązanie AI, które tworzymy, jest jak szyte na miarę garnitur — perfekcyjnie dopasowane do unikalnych potrzeb Twojej firmy.'
        },
        {
          title: 'Innowacje prowadzące branżę',
          description: 'Jesteśmy pionierami w wdrażaniu najnowszych technologii AI, które wyznaczają nowe standardy w branży.'
        },
        {
          title: 'Partnerstwo, a nie tylko wsparcie',
          description: 'D4 Quality to Twój partner strategiczny w podróży przez świat AI, oferujący ciągłe doradztwo i optymalizację.'
        },
        {
          title: 'Transparentność i kontrola',
          description: 'Dajemy Ci pełną przejrzystość i kontrolę nad procesami AI, zapewniając spokój ducha i zaufanie.'
        },
        {
          title: 'Zrównoważony rozwój',
          description: 'Nasze rozwiązania są tworzone z myślą o przyszłości — zarówno Twojej firmy, jak i etyki.'
        }
      ],
    };
  },
};
</script>
