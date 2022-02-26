import Vue from "vue";

export default {
  loadData({ dispatch }) {
    Vue.prototype.$http("data.json").then(response => {
      if (response.status !== 200) return;
      return response.data;
    }).then(data => {
      console.log(data)
      const profile = {
        stocks: data.myStocks,
        saldo: data.saldo
      };

      dispatch("setMyStockData", profile);

      const stock = {
        stocks: data.stocks,
        day: parseInt(data.day)
      }

      dispatch("stock/setStockData", stock);
    })

  }
}
