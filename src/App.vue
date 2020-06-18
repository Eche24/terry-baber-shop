<template>
  <v-app>
    <Nav />
    <v-container fluid style="background:black; color:white;" class="pa-0">
      <Hero />
    </v-container>
    <v-content class="pa-0">
      <Home />
    </v-content>
    <v-container fluid style="background:black; color:white;">
      <Footer style="background:black;" />
    </v-container>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Hero from "./components/Hero";

export default {
  name: "App",

  components: {
    Home,
    Footer,
    Nav,
    Hero
  },

  data: () => ({
    //
  })
};
</script>
