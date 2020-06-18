<template>
  <v-container fluid>
    <v-layout wrap row align-center justify-center fill-height>
      <v-flex xs10 sm10 md10 lg10>
        <h2
          class="text-center mb-4"
          style="font-family: 'Oxygen', sans-serif; font-size:200%;"
        >
          Our Service
        </h2>
        <v-row gutters>
          <!-- <template> -->
          <v-flex
            xs10
            sm6
            md6
            lg6
            v-for="(service, i) in services"
            :key="i"
            class="pa-2"
          >
            <v-card class="pa-2" outlined tile max-height="300">
              <div class="text-center">
                <v-btn class="ma-2" outlined large fab :color="service.color">
                  <v-icon>{{ service.icon }}</v-icon>
                </v-btn>
              </div>
              <h2
                class="text-center"
                style="font-family: 'Oxygen', sans-serif; font-size:150%;"
              >
                {{ service.title }}
              </h2>
              <p
                class="text-center"
                style="font-family: 'Merriweather Sans', sans-serif; font-size:120%;"
              >
                {{ service.text }}
              </p>
            </v-card>
          </v-flex>
          <!-- <v-responsive v-if="n === 2" :key="`width-${n}`" width="100%"></v-responsive> -->
          <!-- </template> -->
        </v-row>
      </v-flex>
    </v-layout>
    <v-divider inset></v-divider>
  </v-container>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      services: [
        {
          title: "Washing of Hair",
          text:
            "When hair washing is included.we use high quality Shampoo which has a great menthol effect",
          icon: "   mdi-account",
          color: "indigo"
        },
        {
          title: "Hair Dye",
          text:
            "We use only the best dye to create that look you want while preserving your hair health.",
          icon: "mdi-hair-dryer",
          color: "teal"
        },
        {
          title: "Home Services",
          text:
            "Professional haircuts delivered to you at the comfort of your home",
          icon: "mdi-home",
          color: "red"
        },
        {
          title: "Haircut",
          text:
            "An awesome haircut, shampoo, scalp massage, hot towel face treatment. You deserve it.",
          icon: "mdi-scissors-cutting",
          color: "blue"
        }
      ]
    };
  }
};
</script>
