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
      AI is a technology that can be used to solve problems.
      It is a way of thinking that is based on the idea of
      "thinking like a computer".
    </v-card-text>

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
    more() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
