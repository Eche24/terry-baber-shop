<template>
  <v-container class="pa-0 px-0" style="background:#000">
    <!-- <v-footer dark> -->
    <v-layout wrap row align-center justify-center fill-height>
      <v-flex xs10 sm12 md12 lg12>
        <v-card flat style="background:#000">
          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} —
            <span
              style="font-family: 'Lobster', cursive; text-transform: capitalize; color=#b2d650; font-size: 26px; "
              >terry's baber shop</span
            >
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon size="28px" :href="icon.link">{{ icon.icon }}</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <h5 color="white">Designed by eche ngbede</h5>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- </v-footer> -->
  </v-container>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/Terrys-barbers-shop-112114106905358/"
      }
    ]
  })
};
</script>
