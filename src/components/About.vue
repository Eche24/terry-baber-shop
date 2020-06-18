<template>
  <v-container fluid>
    <v-layout wrap row align-center justify-center fill-height>
      <v-flex xs12 sm6 md6 lg6 class="px-1">
        <h2
          class="text-center mb-2"
          style="font-family: 'Oxygen', sans-serif; font-size:200%;"
        >ABOUT US</h2>
        <p style="font-family: 'Merriweather Sans', sans-serif; font-size:120%;">
          <span style="color:#EE4037;">Terry's baber shop</span> is a
          neighborhood barbershop located in
          <span
            style="font-weight: 600"
          >Ankpa Quarter Before Hallydays,Makurdi Benue State.</span>
          We offer
          <span style="color:#EE4037;">traditional services</span>
          and do them right.
        </p>
      </v-flex>
      <v-flex xs10 sm6 md6 lg6>
        <v-row>
          <v-col cols="6" sm="4" md="4">
            <v-img src="../assets/terry-gallery-1.jpg"></v-img>
          </v-col>

          <v-col cols="6" sm="4">
            <v-img src="../assets/terry-gallery-2.jpg"></v-img>
          </v-col>

          <v-col cols="6" sm="4">
            <v-img src="../assets/terry-gallery-3.jpg"></v-img>
          </v-col>
          <v-col cols="6" sm="4" class="hidden-sm-and-up">
            <v-img src="../assets/terry-gallery-4.jpg"></v-img>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    skill: 20,
    knowledge: 33,
    power: 78
  })
};
</script>
