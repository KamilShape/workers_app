import { createRouter, createWebHashHistory } from "vue-router";
import AddWorker from "../views/AddWorker.vue";
import WorkersList from "../views/WorkersList.vue";

const routes = [{
        path: "/",
        name: "AddWorker",
        component: AddWorker,
    },
    {
        path: "/workerslist",
        name: "WorkersList",
        component: WorkersList,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;