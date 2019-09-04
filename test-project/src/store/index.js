import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    USD_TO_AED: null,
    AED_TO_USD: null
  },
  getters: {
    USD_TO_AED: state => {
      return state.USD_TO_AED;
    },
    AED_TO_USD: state => {
      return state.AED_TO_USD;
    }
  },
  mutations: {
    SET_USD_TO_AED: (state, payload) => {
      state.USD_TO_AED = payload;
    },
    SET_AED_TO_USD: (state, payload) => {
      state.AED_TO_USD = payload;
    }
  },
  actions: {
    GET_USD: context => {
      Axios.get(
        "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=AED&to_currency=USD&apikey=LPEEVHDVZ7GEDALJ"
      ).then(response => {
        context.commit(
          "SET_AED_TO_USD",
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
      });
    },
    GET_AED: context => {
      Axios.get(
        "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=AED&apikey=LPEEVHDVZ7GEDALJ"
      ).then(response => {
        context.commit(
          "SET_USD_TO_AED",
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
      });
    }
  }
});
