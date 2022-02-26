<template>
  <v-flex class="pr-5 pb-5" xs12 md6 lg4>
    <v-card class="darken-3 white--text flex" :class="color">
      <v-card-title class="headline">
        <strong>{{ stock.name }}  <small>(Preço: {{ stock.price | money }} R$)</small></strong>
        <v-spacer v-if="stock.quantity"></v-spacer>
        <span v-if="stock.quantity" class="font-weight-medium caption">Quantidade: {{ stock.quantity }}</span>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" :color="colorField" type="number" v-model.number="quantity" />
        <v-btn cursor class="blue darken-3 white--text pa-1 ml-2 rounded" :disabled="!this.isValidQuantity()" @click="activeAction(stock)">
          {{ textButtonValid }}
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "stock",

  props: {
    stock: {
      type: Object,
      name: {
        type: String,
        require: true
      },
      price: {
        type: Number,
        require: true
      },
      quantity: {
        type: Number,
        require: false
      }
    },
    actionWithNamespaced: {
      type: Object,
      require: true
    },
    color: {
      type: String,
      require: true
    },
    textButton: {
      type: String,
      require: true
    }
  },

  data: () => ({
    quantity: null
  }),

  computed: {
    ...mapGetters(["saldo"]),
    buttonText() {
      return this.isValidQuantity();
    },

    colorField() {
      return this.isValidQuantity() ? "blue" : "red";
    },

    textButtonValid() {
      return this.heHasQuantityOrMoney() ? this.textButton : "Insufi"
    },
  },

  methods: {
    activeAction(stock) {
      let payload = { stock: { id: stock.id }, quantity: this.quantity };
      this.quantity = null;
      this.$store.dispatch((this.actionWithNamespaced.namespaced || "") + this.actionWithNamespaced.action, payload);
    },

    isValidQuantity() {
      return (this.quantity && this.quantity > 0) && this.heHasQuantityOrMoney() && Number.isInteger(this.quantity);
    },

    heHasQuantityOrMoney() {
      if (this.stock.quantity > 0) {
        return this.quantity <= this.stock.quantity;
      }
      return ((this.quantity * this.stock.price) < this.saldo)
    },
  },
}
</script>

<style scoped>

</style>