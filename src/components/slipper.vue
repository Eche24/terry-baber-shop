<template>
  <v-container fluid>
    <v-layout wrap row align-center justify-center fill-height>
      <v-flex xs12 sm10 md10 lg10>
        <h2
          class="text-center mb-4"
          style="font-family: 'Oxygen', sans-serif; font-size:170%;"
        >
          Call to Order Our Customize Easy Wears Slippers
        </h2>
        <v-btn color="deep-purple lighten-2 text-center" text
          >call to order: +23480169957359</v-btn>
        <v-row gutters>
          <v-flex xs10 sm4 md4 lg4 v-for="(product, i) in products" :key="i">
            <v-card  max-width="400" max-height="450" class="px-2 pa-2 ma-2">
              <v-img
                height="340"
                :src="product.img"
                :lazy-src="product.img"
                width="100%"
              ></v-img>

              <!-- <v-card-title>{{ product.name }}</v-card-title> -->

              <!-- <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 subtitle-1">$ • Italian, Cafe</div>

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
              </v-card-text>-->

              <!-- <v-divider class="mx-4"></v-divider> -->

              <!-- <v-card-title>Tonight's availability</v-card-title> -->

              <v-card-text>
                <v-chip
                  class="teal"
                  style="font-family: 'Montserrat', sans-serif; font-size: 140%; font-weight: 300;"
                  >Prices: ₦ {{ product.prices }}</v-chip
                >
              </v-card-text>

              <!-- <v-card-actions>
              </v-card-actions>-->
            </v-card>
          </v-flex>
        </v-row>
      </v-flex>
      <!-- </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    products: [
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/terrybabershop.appspot.com/o/easy-wear-1.jpg?alt=media&token=e0c4c49b-a0ff-4864-8297-8ba93513054f",
        name: "Cafe Badilico",
        prices: "7000",
        desc: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/terrybabershop.appspot.com/o/easy-wear-8.jpg?alt=media&token=3e1e1c7c-9d06-465d-aaa7-a6ca85fd4d99",
        name: "Cafe Badilico",
        prices: "7000",
        desc: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/terrybabershop.appspot.com/o/easy-wear-2.jpg?alt=media&token=10ddafab-b192-48bf-85a2-8fb286adca9f",
        name: "Cafe Badilico",
        prices: "7000",
        desc: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/terrybabershop.appspot.com/o/easy-wear-3.jpg?alt=media&token=38994499-737e-4bfd-a760-f354681c46f4",
        name: "Cafe Badilico",
        prices: "7000",
        desc: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/terrybabershop.appspot.com/o/easy-wear-4.jpg?alt=media&token=52caf034-3747-4e48-8b10-5e1707221364",
        name: "Cafe Badilico",
        prices: "7000",
        desc: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/terrybabershop.appspot.com/o/easy-wear-5.jpg?alt=media&token=0c876a6b-072b-4ebd-a6c0-ece7133f7a38",
        name: "Cafe Badilico",
        prices: "7000",
        desc: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/terrybabershop.appspot.com/o/easy-wear-6.jpg?alt=media&token=32b97835-9708-4f7c-8a54-43ea989efea0",
        name: "Cafe Badilico",
        prices: "7000",
        desc: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/terrybabershop.appspot.com/o/easy-wear-7.jpg?alt=media&token=07d909b1-3005-41bc-b6e2-c7168071e41e",
        name: "Cafe Badilico",
        prices: "7000",
        desc: ""
      },
      {
        img:
          "https://firebasestorage.googleapis.com/v0/b/terrybabershop.appspot.com/o/terry-gallery-9.jpg?alt=media&token=c86c95d9-986d-41e2-aba4-2d5d99347ed2",
        name: "Cafe Badilico",
        prices: "7000",
        desc: ""
      }
    ]
  })
};
</script>
