import type { StoreData } from "../types";

import dofus from "../../assets/images/categories/nav_item_dofus.png";
import wakfu from "../../assets/images/categories/nav_item_wakfu.png";

export const storeData: StoreData = [
  {
    game: "DOFUS",
    basePath: "dofus",
    categorieImage: dofus,
    categories: [
      {
        name: "Weekly Deals",
        path: "weekly-deals",
        banner: {
          image: "/images/weekly-deals-banner.jpg",
          title: "WEEKLY DEALS",
          subtitle: "HANDPICKED GREAT DEALS!",
        },
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
        banner: {
          image: "/images/dofus-mounts-banner.jpg",
          title: "MOUNTS",
          subtitle: "RIDE IN STYLE!",
        },
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
        banner: {
          image: "/images/dofus-cosmetics-banner.jpg",
          title: "COSMETICS",
          subtitle: "CUSTOMIZE YOUR HERO!",
        },
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
  {
    game: "WAKFU",
    basePath: "wakfu",
    categorieImage: wakfu,
    categories: [
      {
        name: "Featured Offers",
        path: "featured-offers",
        banner: {
          image: "/images/wakfu-featured-banner.jpg",
          title: "FEATURED OFFERS",
          subtitle: "POWER UP YOUR ADVENTURE!",
        },
        products: [
          {
            id: 1,
            slug: "starter-booster-pack",
            name: "Starter Booster Pack",
            image: "/images/wakfu-booster.jpg",
            price: 3500,
            originalPrice: 5000,
            discount: 30,
          },
          {
            id: 2,
            slug: "mount-skin-celestial-dragoturkey",
            name: "Mount Skin: Celestial Dragoturkey",
            image: "/images/wakfu-mount.jpg",
            price: 1800,
          },
        ],
      },
      {
        name: "Pets",
        path: "pets",
        banner: {
          image: "/images/wakfu-pets-banner.jpg",
          title: "PETS",
          subtitle: "LOYAL COMPANIONS!",
        },
        products: [
          {
            id: 3,
            slug: "baby-gobball",
            name: "Baby Gobball",
            image: "/images/wakfu-pet1.jpg",
            price: 900,
          },
          {
            id: 4,
            slug: "mini-tofu",
            name: "Mini Tofu",
            image: "/images/wakfu-pet2.jpg",
            price: 1100,
            originalPrice: 1400,
            discount: 20,
          },
        ],
      },
      {
        name: "Costumes",
        path: "costumes",
        banner: {
          image: "/images/wakfu-costumes-banner.jpg",
          title: "COSTUMES",
          subtitle: "STYLE YOUR CHARACTER!",
        },
        products: [
          {
            id: 5,
            slug: "shadow-assassin-outfit",
            name: "Shadow Assassin Outfit",
            image: "/images/wakfu-costume1.jpg",
            price: 2500,
          },
          {
            id: 6,
            slug: "celestial-robe",
            name: "Celestial Robe",
            image: "/images/wakfu-costume2.jpg",
            price: 3000,
            originalPrice: 3800,
            discount: 21,
          },
        ],
      },
    ],
  },
];