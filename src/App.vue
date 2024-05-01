<template>
  <v-app>
    <v-layout>
      <ToolBar />
    </v-layout>

    <v-main>
      <HelloWorld />
      <v-container fluid>
		<v-row>
			<News />
		</v-row>
        <v-row justify="center">
          <v-col cols="4" md="3"><AICard /></v-col>
          <v-col cols="4" md="3"><EnglishCard /></v-col>
          <v-col cols="4" md="3"><ItCard /></v-col>
          <v-col cols="4" md="3"><CoursesCard /></v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="4">
            <h1>Proszę o kontakt</h1>
            <ContactForm />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer>
		<Footer />
	</v-footer>
  </v-app>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import ToolBar from "./components/ToolBar.vue";
import News from "./components/News.vue";
import EnglishCard from "./components/EnglishCard.vue";
import ItCard from "./components/ItCard.vue";
import CoursesCard from "./components/CoursesCard.vue";
import AICard from "./components/AICard.vue";
import ContactForm from "./components/ContactForm.vue";
import Footer from "./components/Footer.vue"
</script>
