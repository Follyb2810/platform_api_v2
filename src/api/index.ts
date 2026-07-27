import { Router } from "express";
import paymentRoutes from "./payment/routes";

export interface IRouteList {
  path: string;
  router: Router;
}

const routes: IRouteList[] = [
  {
    path: "/payment",
    router: paymentRoutes,
  },
];

export default function loadRoutes(app: Router) {
  routes.forEach(({ path, router }) => {
    app.use(`/api${path}`, router);
  });
}
