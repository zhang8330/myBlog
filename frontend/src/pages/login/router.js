import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path:'/',
        redirect:"/loginPage",
        children:[
            {
                path:"/loginPage",
                name:"loginPage",
                component: () => import("@/pages/login/App.vue")
            },
        ]
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;