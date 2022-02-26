<template>
  <v-layout row wrap class="mt-5">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"
           textButton="Comprar" color="green"
           :actionWithNamespaced="{namespaced: 'stock/', action: 'buyStock' }" />
  </v-layout>
</template>

<script>
import Stock from "../components/Stock";
import {mapGetters} from "vuex";

export default {
  name: "Stocks",

  components: { Stock },

  computed: mapGetters("stock", ["stocks"]),

}
</script>

<style scoped>

</style>