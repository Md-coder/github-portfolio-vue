import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RepositoriesView from '../views/RepositoriesView.vue';
import SingleRepo from '../components/Repolist.vue';
import Putin from '../views/PutinView.vue';
import NotFound from '../views/NotFoundView.vue';
import ErrorPage from '../views/ErrorView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/putin',
    name: 'Putin',
    component: Putin,
  },
  {
    path: '/notFound',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/error_page',
    name: 'ErrorPage',
    component: ErrorPage,
  },
  {
    path: '/repositories',
    name: 'Repositories',
    component: RepositoriesView,
    children: [
      {
        path: 'repo_details',
        name: 'SingleRepo',
        component: SingleRepo,
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
