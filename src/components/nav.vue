<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      temporary
      app
      dark
    >
      <v-list dense nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-divider></v-divider>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-card class="overflow-hidden">
      <v-app-bar
        style="box-shadow:-21.213px 21.213px 30px 0px rgba(158, 158, 158, 0.3);"
        dark
        scroll-off-screen
      >
        <v-app-bar-nav-icon
          class="hidden-sm-and-up"
          @click.stop="drawer = !drawer"
        />
        <v-toolbar-title
          style="font-family: 'Lobster', cursive; text-transform: capitalize; color=#b2d650; font-size: 36px; "
        >
          terry's babershop
        </v-toolbar-title>
        <v-spacer />
        <v-btn-toggle color="#EE4037" group v-model="toggle_exclusive" rounded>
          <v-btn
            text
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
            class="hidden-xs-only"
            flat
          >
            <span
              v-text="item.title"
              color="#000"
              style="font-family: 'Roboto', sans-serif;text-transform: capitalize;"
            ></span>
          </v-btn>
        </v-btn-toggle>
        <!-- </v-toolbar-items> -->
      </v-app-bar>
    </v-card>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-view-dashboard",
          title: "About",
          to: "#about"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Services",
          to: "#services"
        },
        {
          icon: "mdi-dialpad",
          title: "Contact",
          to: "#contact"
        }
      ],
      title: " ",
      toggle_exclusive: undefined
    };
  }
};
</script>
