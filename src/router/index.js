import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RepositoriesView from '../views/RepositoriesView.vue';
import SingleRepo from '../components/Repolist.vue';
import Putin from '../views/PutinView.vue';
import NotFound from '../views/NotFoundView.vue';

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
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
