<template>
  <v-layout wrap row align-center justify-center fill-height>
    <v-flex class="text-center pt-2" xs10 sm6 md6 lg6>
      <h1
        class="font-weight-thin"
        style="font-family: 'Metal Mania', cursive; font-size:300% ;color:#EE4037;"
      >welcome to terry's babershop</h1>
      <blockquote
        class="mb-4"
        style=" font-family: 'Montserrat', sans-serif;  font-weight: 700; "
      >we barb the lastest</blockquote>
      <h4
        class="subheading"
        style="font-family: 'Montserrat', sans-serif; font-size: 140%; font-weight: 300;"
      >
        Giving you a legendary haircut with traditional service.
        <br />you can book an appointment by
        <br />
        <v-btn class="ma-2" outlined color="#F5F5F5" large>
          <span style="color:#EE4037;font-weight: 700;">calling us : </span> +23480169957359
        </v-btn>
      </h4>
    </v-flex>
    <v-flex xs10 sm6 md6 lg6 class="pb-1">
      <v-row align="center" justify="center">
        <v-img src="../assets/terry.jpg" lazy-src="../assets/terry.jpg" cover width="100%"></v-img>
      </v-row>
    </v-flex>
  </v-layout>
</template>
