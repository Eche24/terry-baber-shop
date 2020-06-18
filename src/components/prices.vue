<template>
  <v-container>
    <v-layout wrap row align-center justify-center>
      <v-flex xs10 sm10 md8 lg8>
        <h2
          class="text-center mb-4"
          style="font-family: 'Oxygen', sans-serif; font-size:200%;"
        >
          Affordable Prices
        </h2>
        <v-card flat color="#f3f3f3" max-width="" class="mx-auto">
          <v-simple-table dark>
            <template v-slot:default>
              <thead>
                <tr>
                  <th
                    class="text-left"
                    style="font-family: 'Oxygen', sans-serif; font-size:150%;color:#EE4037;"
                  >
                    Style
                  </th>
                  <th
                    class="text-left"
                    style="font-family: 'Oxygen', sans-serif; font-size:150%; color:#EE4037"
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody
                style="font-family: 'Merriweather Sans', sans-serif; font-size:140%;"
              >
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>‎₦ {{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "Adult Cut",
          calories: 300
        },
        {
          name: "Ladies Cut",
          calories: 300
        },
        {
          name: "Children Cut",
          calories: 150
        },
        {
          name: "Shaving",
          calories: 150
        },
        {
          name: "Color Dye",
          calories: 1000
        },
        {
          name: "Home Services",
          calories: 2000
        },
        {
          name: "Hair Dying",
          calories: 500
        }
      ]
    };
  }
};
</script>
