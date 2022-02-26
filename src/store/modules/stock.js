
export default {
  namespaced: true,
  state: {
    stocks: [
      { id: 1, name: "Apple", price: 110 },
      { id: 2, name: "Twitter", price: 70 },
      { id: 3, name: "Google", price: 200 },
      { id: 4, name: "BMW", price: 150 }
    ],
    day: 1,
  },

  mutations: {
    randomizeStocks(state) {
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
      })
    },
    forwardDay(state) {
      state.day += 1;
    },
    setStocks(state, payload) {
      state.stocks = payload;
    },
    setDay(state, payload) {
      state.day = payload
    }
  },

  actions: {
    // eslint-disable-next-line
    buyStock({ commit, dispatch, state, rootState }, payload) {
      const stockState = state.stocks.find(stock => stock.id === payload.stock.id)
      dispatch("subMoney", (payload.quantity * stockState.price), { root: true });
      dispatch("addMyStock", payload, { root: true })
    },

    randomizeStocks({ commit }) {
      commit("randomizeStocks");
      commit("forwardDay")
    },
    setStockData({ commit }, { stocks, day }) {
      commit("setStocks", stocks);
      commit("setDay", day);
    }
  },

  getters: {
    stocks(state) {
      return state.stocks;
    },

    day(state) {
      return state.day.toString();
    }
  },

}