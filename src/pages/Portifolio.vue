<template>
  <v-layout v-if="myStocks.length" row wrap app class="ma-4">
    <Stock v-for="stock in myStocks" :key="stock.id" :stock="stock"
           color="blue" textButton="Vender"
           :actionWithNamespaced="{ namespaced: null, action: 'sellMyStock' }"/>
  </v-layout>
  <p v-else class="font-weight-regular display-1">Você ainda não tem açoes no seu portifólio.</p>
</template>

<script>
import Stock from "../components/Stock";
import { mapGetters } from "vuex";

export default {
  name: "Portifolio",
  components: { Stock },

  computed: mapGetters(["myStocks"]),


}
</script>

<style scoped>

</style>