<template>
  <v-toolbar>
    <v-toolbar-title>
      <v-btn size="x-large" to="/">
        <img src="../assets/logod4.png" height="60" />
      </v-btn>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click='changeTheme'>
      <v-icon :icon="darkTheme ? 'mdi-weather-sunny' : 'mdi-weather-night'">
	  </v-icon>
    </v-btn>
    <!-- <v-btn icon>
      <v-icon color="error">mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
  </v-toolbar>
</template>

<script>
import { ref } from 'vue';
import { useTheme } from 'vuetify';

export default {
  setup() {
    const darkTheme = ref(true);
    const theme = useTheme();

    function changeTheme() {
      darkTheme.value = !darkTheme.value;
      theme.global.name.value = darkTheme.value ? "dark" : "light";
    }

    return {
      darkTheme,
      changeTheme
    }
  }
}
</script>