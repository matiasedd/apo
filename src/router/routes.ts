import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'APO',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('pages/LoginPage.vue')
      },
      {
        path: 'signin',
        name: 'Cadastro',
        component: () => import('pages/SignInPage.vue')
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import('pages/HomePage.vue')
      },
      {
        path: 'recover',
        name: 'Recuperar Senha',
        component: () => import('pages/RecoverPage.vue')
      },
      {
        path: 'avaliacao',
        name: 'Avaliação',
        component: () => import('pages/AvaliacaoPage.vue')
      }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
