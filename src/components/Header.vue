<template>
  <v-app-bar app>
    <v-toolbar-title class="title text-uppercase mr-4">
      <span>stock</span>
      <span class="font-weight-light">trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn text cursor to="/">Início</v-btn>
      <v-btn text cursor to="/portifolio">Portifólio</v-btn>
      <v-btn text cursor to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text cursor @click="randomizeStocks">Finalizar Dia</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text cursor v-on="on">Salvar & Carregar</v-btn>
        </template>
        <v-list>
          <v-list-item cursor @click="saveData">
            <v-list-item-title>
              Salvar Dados
            </v-list-item-title>
          </v-list-item>
          <v-list-item cursor @click="loadData">
            <v-list-item-title>
              Carregar Dados
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-items>
        <span class="flex align-self-center caption">
          Saldo: R$ {{ saldo | money }}
        </span>
      </v-toolbar-items>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",

  computed: {
    ...mapGetters(["saldo"]),
  },

  methods: {
    ...mapActions("stock", ["randomizeStocks"]),
    ...mapActions(["loadData"]),

    saveData() {
      const { saldo, myStocks, ["stock/stocks"]: stocks, ["stock/day"]: day } = this.$store.getters;

      this.$http.put("data.json", {
        saldo,
        myStocks,
        stocks,
        day
      })
    }

  }
}
</script>

<style>
[cursor] {
  cursor: pointer;
}
</style>