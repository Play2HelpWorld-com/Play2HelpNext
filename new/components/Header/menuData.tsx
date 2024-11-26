import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Play",
    newTab: false,
    path: "/games",
  },
  {
    id: 2,
    title: "Boosters",
    newTab: false,
    path: "/#boosters",
  },
  {
    id: 3,
    title: "Charities",
    newTab: false,
    path: "/blog",
  },
  {
    id: 4,
    title: "Why Play2Help",
    newTab: false,
    path: "/docs",
  },
  {
    id: 5,
    title: "Join Us",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 54,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 55,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 56,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 57,
        title: "Contact Us",
        newTab: false,
        path: "/support",
      },
      {
        id: 58,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 6,
    title: "Rewards",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
