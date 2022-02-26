<template>
  <div id="home">
    <h1 class="font-weight-light display-2 mb-3">Negocie e Consulte suas Ações</h1>
    <v-alert dense type="info" elevation="6">
      Você pode Salvar & Carregamento os Dados
    </v-alert>
    <v-alert dense type="info" color="green" elevation="6">
      Clique em 'Finalizar Dia' para iniciar um novo dia!
    </v-alert>
    <hr class="mb-4">
    <span class="font-weight-regular display-2">
      Seu Saldo: R${{ saldo | money }}
    </span><br>
    <span class="font-weight-medium display-1">
      Dia {{ this["stock/day"] }}
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",

  computed: mapGetters(["saldo", "stock/day"])
}
</script>

<style scoped>

</style>