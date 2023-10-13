import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./page/dashboard/Dashboard";
import Team from "./page/team/Team";
import UpdateTeam from "./page/team/UpdateTeam";
import Contacts from "./page/contacts/Contacts";
import Form from "./page/form/Form";
import Notifications from "./page/notifications/Notifications";
import FAQ from "./page/faq/FAQ";
import BarChart from "./page/barChart/BarChart";
import PieChart from "./page/pieChart/PieChart";
import LineChart from "./page/lineChart/LineChart";
import Geography from "./page/geography/Geography";
import NotFound from "./page/notFound/NotFound";
import Articles from "./page/articles/Articles";
import ArticleDetails from "./page/articles/ArticleDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="updateTeam" element={<UpdateTeam />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="form" element={<Form />} />
      <Route path="notifications" element={<Notifications />} />
      <Route path="articles" element={<Articles />} />
      <Route path="ArticleDetails" element={<ArticleDetails />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
