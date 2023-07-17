import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../pages/home/Home.vue');
const Landing = () => import('../pages/landing/LandingPage.vue');
const Login = () => import('../pages/login/Login.vue');

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/landing', component: Landing },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
});
