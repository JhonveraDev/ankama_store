import type { StoreData } from "../types";

import dofus from "../../assets/images/products/dofus.22848db4.svg";
import wakfu from "../../assets/images/categories/nav_item_wakfu.png";

import weekly from "../../assets/images/banners/banner_dofus_weekly_deals.jpg";
import weeklys from "../../assets/images/banners/banner_dofus_weekly_dealss.jpg";

import prueba1 from "../../assets/images/banners/prueba-1.jpg";
import prueba11 from "../../assets/images/banners/prueba-11.jpg";

import prueba2 from "../../assets/images/banners/prueba-2.jpg";
import prueba22 from "../../assets/images/banners/prueba-22.jpg";
import prueba13 from "../../assets/images/banners/prueba-13.jpg";

import thumb1 from "../../assets/images/products/original_29460_all.w368h368.png";


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
          { mainBanner: prueba13, thumbBanner: weeklys, link: "/store/dofus/mounts" },
        ],
        products: [
          {
            id: 1,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom adasdasdas",
            image: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 2,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 3,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 4,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 5,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 6,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 7,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 8,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
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
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 2,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
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
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 2,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 3,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 4,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 5,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
          {
            id: 6,
            slug: "haven-bag-showroom",
            name: "Haven Bag Showroom",
            image: thumb1,
            price: 5640,
            originalPrice: 9400,
            discount: 40,
          },
        ],
      },
    ],
  },
];