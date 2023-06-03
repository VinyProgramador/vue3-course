import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
    addToBag(state, product) {
      state.productsInBag.push(product);
    },
    removeFromBag(state, productId) {
      var updatedBag = state.productsInBag.filter(item => productId != item.id);
      state.productsInBag = updatedBag;
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          commit('loadProducts', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToBag({ commit }, product) {
      commit('addToBag', product)
    },
    removeFromBag({ commit }, productId) {
      if (confirm("Deseja realmente remover do carrnho?")) {
        return commit('removeFromBag', productId);
      }
    }
  },
  modules: {}
})
