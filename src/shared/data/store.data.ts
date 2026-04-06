import type { StoreData } from "../types";

import dofus from "../../assets/images/categories/nav_item_dofus.png";
import wakfu from "../../assets/images/categories/nav_item_wakfu.png";

import weekly from "../../assets/images/banners/banner_dofus_weekly_deals.jpg";
import weeklys from "../../assets/images/banners/banner_dofus_weekly_dealss.jpg";

import prueba1 from "../../assets/images/banners/prueba-1.jpg";
import prueba11 from "../../assets/images/banners/prueba-11.jpg";

import prueba2 from "../../assets/images/banners/prueba-2.jpg";
import prueba22 from "../../assets/images/banners/prueba-22.jpg";


export const storeData: StoreData = [
  {
    game: "DOFUS",
    basePath: "dofus",
    categorieImage: dofus,
    categories: [
      {
        name: "Weekly Deals",
        path: "weekly-deals",
        banners: [
          { mainBanner: weekly, thumbBanner: weeklys },
        ],
        products: [
          {
            id: 1,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: "/images/haven-bag.jpg",
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 2,
            slug: "golden-pack",
            name: "Golden Pack",
            image: "/images/golden-pack.jpg",
            price: 2000,
          },
        ],
      },
      {
        name: "Mounts",
        path: "mounts",
        banners: [
          { mainBanner: prueba2, thumbBanner: prueba22 },
        ],
        products: [
          {
            id: 3,
            slug: "emerald-dragoturkey",
            name: "Emerald Dragoturkey",
            image: "/images/dofus-mount1.jpg",
            price: 3200,
          },
          {
            id: 4,
            slug: "crimson-dragoturkey",
            name: "Crimson Dragoturkey",
            image: "/images/dofus-mount2.jpg",
            price: 4500,
            originalPrice: 6000,
            discount: 25,
          },
        ],
      },
      {
        name: "Cosmetics",
        path: "cosmetics",
        banners: [
          { mainBanner: prueba1, thumbBanner: prueba11 },
        ],
        products: [
          {
            id: 5,
            slug: "knight-costume",
            name: "Knight Costume",
            image: "/images/dofus-costume.jpg",
            price: 2100,
          },
          {
            id: 6,
            slug: "royal-emote-pack",
            name: "Royal Emote Pack",
            image: "/images/dofus-emotes.jpg",
            price: 1200,
            originalPrice: 1500,
            discount: 20,
          },
        ],
      },
    ],
  },
];