import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Basket from '../views/ShoppingBasket.vue';
import Product from '../views/ProductItem.vue';
import NotFound from '../views/PageNotFound.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: NotFound
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
