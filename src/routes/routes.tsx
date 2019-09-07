import { About, AdditionalLinks, Contributors, Gallery, Home, Month, Months } from "../views"

export const routes = [
  {
    component: Home,
    path: "/",
    exact: true
  },
  {
    component: About,
    path: "/about",
    exact: true
  },
  {
    component: Months,
    path: "/months",
    exact: true
  },
  {
    component: Month,
    path: "/months/:name",
    exact: true
  },
  {
    component: Contributors,
    path: "/contributors",
    exact: true
  },
  {
    component: AdditionalLinks,
    path: "/additional-links",
    exact: true
  },
  {
    component: Gallery,
    path: "/gallery",
    exact: true
  }
];
