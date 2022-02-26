import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import stock from "./modules/stock";

import actionsServices from "./service/actions"

export default new Vuex.Store({
  state: {
    saldo: 1700,
    myStocks: []
  },

  mutations: {
    subMoney(state, payload) {
      state.saldo -= payload;
    },

    addMoney(state, payload) {
      state.saldo += payload;
    },

    addMyStock(state, payload) {
      state.myStocks.push(payload);
    },

    addQuantityMyStockByIndex(state, { quantity, index }) {
      state.myStocks[index].quantity += quantity;
    },

    sellMyStockByIndex(state, { index, quantity}) {
      state.myStocks[index].quantity -= quantity;
    },

    removeMyStockByIndex(state, index) {
      state.myStocks.splice(index, 1);
    },

    setMyStock(state, payload) {
      state.myStocks = payload;
    },

    setSaldo(state, payload) {
      state.saldo = payload;
    }
  },

  actions: {
    subMoney({ commit }, payload) {
      commit("subMoney", payload);
    },

    addMyStock({ commit, state }, { quantity, stock }) {
      const index = state.myStocks.findIndex(stocks => stocks.id === stock.id);
      const stockState = state.myStocks[index];

      if (stockState) {
        commit("addQuantityMyStockByIndex", { quantity, index });
        return;
      }

      stock.quantity = quantity;
      commit("addMyStock", stock);
    },

    sellMyStock({ commit, state }, { quantity, stock }) {
      const stockState = state.stock.stocks.find(stocks => stocks.id === stock.id)
      console.log(quantity, stockState.price);
      commit("addMoney", (quantity * stockState.price));

      const index = state.myStocks.findIndex(stocks => stocks.id === stock.id);
      commit("sellMyStockByIndex", { quantity, index });

      if (state.myStocks[index].quantity === 0) {
        commit("removeMyStockByIndex", index);
      }
    },

    setMyStockData({ commit }, { stocks, saldo }) {
      commit("setMyStock", stocks)
      commit("setSaldo", saldo)
    },

    ...actionsServices
  },

  getters: {
    saldo(state) {
      return state.saldo;
    },
    myStocks(state) {
      return state.myStocks.map(stock => {
        const stockState = state.stock.stocks.find(stockState => stockState.id === stock.id)
        return { ...stockState, quantity: stock.quantity }
      });
    }
  },

  modules: { stock }
});