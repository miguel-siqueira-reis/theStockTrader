<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <transition name="route" appear>
          <routerView></routerView>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    teste: "oi"
  }),
};
</script>

<style>
  .route-enter {
    opacity: 0;
    transform: translateX(20px);
  }

  .route-enter-active {
    transition: opacity .2s, transform .2s;
  }

  .route-enter-to {
    transform: translateX(0px);
    opacity: 1;
  }

</style>
