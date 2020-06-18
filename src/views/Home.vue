<template>
  <div>
    <v-container fluid>
      <!-- <v-layout> -->
      <About id="about" />
      <!-- </v-layout> -->
    </v-container>
    <v-divider />
    <v-container fluid style="background-color: rgb(253, 250, 250)">
      <v-layout>
        <Services id="services" />
      </v-layout>
    </v-container>
    <v-container fluid style="background-color: rgb(253, 250, 250)">
      <v-layout>
        <Slipper />
      </v-layout>
    </v-container>

    <v-divider />
    <Prices />
    <v-divider />

    <v-container>
      <v-layout wrap row align-center justify-center fill-height>
        <v-flex xs10 sm10 md10 lg10>
          <Contact id="contact" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Prices from "@/components/prices";
import Slipper from "@/components/slipper";

export default {
  name: "Home",
  components: {
    // HelloWorld
    About,
    Services,
    Contact,
    Prices,
    Slipper
  }
};
</script>
