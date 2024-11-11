import { createRouter,createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import ProjectsTemplate from "./components/ProjectsTemplate.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/projects/:id", component: ProjectsTemplate },
    { path: "/:catchAll(.*)", component: NotFound }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;