import type { StoreData } from "../types";

import dofus from "../../assets/images/products/dofus.22848db4.svg";
import wakfu from "../../assets/images/categories/nav_item_wakfu.png";

import weekly from "../../assets/images/banners/banner_dofus_weekly_deals.jpg";
import weeklys from "../../assets/images/banners/banner_dofus_weekly_dealss.jpg";
import weeklyss from "../../assets/images/banners/weeklyss.jpg";

import prueba1 from "../../assets/images/banners/prueba-1.jpg";
import prueba11 from "../../assets/images/banners/prueba-11.jpg";

import prueba2 from "../../assets/images/banners/prueba-2.jpg";
import prueba22 from "../../assets/images/banners/prueba-22.jpg";
import prueba13 from "../../assets/images/banners/prueba-13.jpg";

import thumb1 from "../../assets/images/products/original_29460_all.w368h368.png";
import thumb27 from "../../assets/images/products/original_29812_all.png";


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
          { mainBanner: weekly, thumbBanner: weeklys, link: "/store/dofus/weekly-deals" },
          { mainBanner: prueba13, thumbBanner: weeklyss, link: "/store/dofus/mounts" },
        ],
        products: [
          {
            id: 1,
            slug: "dragoturkey-mount-pack",
            name: "Dragoturkey Mount Pack",
            image: thumb1,
            thumbImage: thumb27,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 2,
            slug: "incarnam-starter-bundle",
            name: "Incarnam Starter Bundle",
            image: thumb1,
            thumbImage: thumb1,
            price: 3200,
            originalPrice: 5000,
            discount: 36,
          },
          {
            id: 3,
            slug: "astrub-knight-costume",
            name: "Astrub Knight Costume",
            image: thumb1,
            thumbImage: thumb1,
            price: 2800,
            originalPrice: 4000,
            discount: 30,
          },
          {
            id: 4,
            slug: "bonta-wings-set",
            name: "Bonta Wings Set",
            image: thumb1,
            thumbImage: thumb1,
            price: 7100,
            originalPrice: 8900,
            discount: 20,
          },
          {
            id: 5,
            slug: "shadofang-pet-pack",
            name: "Shadofang Pet Pack",
            image: thumb1,
            thumbImage: thumb1,
            price: 4500,
            originalPrice: 6000,
            discount: 25,
          },
          {
            id: 6,
            slug: "brakmar-warlord-set",
            name: "Brakmar Warlord Set",
            image: thumb1,
            thumbImage: thumb1,
            price: 8200,
            originalPrice: 11000,
            discount: 25,
          },
          {
            id: 7,
            slug: "emerald-dofus-skin",
            name: "Emerald Dofus Skin",
            image: thumb1,
            thumbImage: thumb1,
            price: 9900,
            originalPrice: 13200,
            discount: 25,
          },
          {
            id: 8,
            slug: "krosmoz-explorer-pack",
            name: "Krosmoz Explorer Pack",
            image: thumb1,
            thumbImage: thumb1,
            price: 6300,
            originalPrice: 7000,
            discount: 10,
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
            id: 1,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom adasdasdas",
            image: thumb1,
            thumbImage: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 2,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            thumbImage: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
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
            id: 1,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom adasdasdas",
            image: thumb1,
            thumbImage: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 2,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            thumbImage: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 3,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            thumbImage: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 4,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            thumbImage: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 5,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            thumbImage: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 6,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            thumbImage: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
        ],
      },
    ],
  },
];