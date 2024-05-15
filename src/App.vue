<template>
  <v-app>
    <ToolBar />
    <v-main>
      <HelloWorld />
      <v-container>
		<v-row justify="center">
			<v-col cols="12" xs="12" md="12" xl="12">
				<About />
			</v-col>
        </v-row>
        <v-row justify="center">
			<v-col cols="12" xs="12" md="12" xl="12">
				<News />
			</v-col>
        </v-row>
        <v-row justify="center">
		  <v-col xs="12" md="6" xl="3">
            <AICard />
          </v-col>
          <v-col xs="12" md="6" xl="3">
            <EnglishCard />
          </v-col>
          <v-col xs="12" md="6" xl="3">
            <ItCard />
          </v-col>
          <v-col xs="12" md="6" xl="3">
            <CoursesCard />
          </v-col>
        </v-row>
		<v-row justify="center">
			<v-col cols="12" xs="12" md="12" xl="12">
				<AIoffer />
			</v-col>
		</v-row>
        <v-row justify="center">
			<v-col xs="12" md="12" xl="12">
            <h1>Proszę o kontakt</h1>
            <Contact />
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
import About from "./components/About.vue";
import News from "./components/News.vue";
import EnglishCard from "./components/EnglishCard.vue";
import AICard from "./components/AICard.vue";
import ItCard from "./components/ItCard.vue";
import CoursesCard from "./components/CoursesCard.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import AIoffer from "./components/AIoffer.vue";
</script>
