import Router from "vue-router";
import Empty from "./routes/Empty.vue";
import Films from "./routes/Films.vue";
import Index from "./routes/Index.vue";

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/movies/:id(\\d+)",
      name: "Films",
      component: Films,
    },
    {
      path: "*",
      name: "Empty page",
      component: Empty,
    },
  ],
  mode: "history",
});
