import panjabi from "../assets/images/panjabi.webp";
import oxfordShirt from '../assets/images/Slim Fit Oxford Shirt.webp'
import cottonShari from '../assets/images/Handloom Cotton Saree.webp'
import kurti from '../assets/images/Embroidered Kurti.jpg'
import jacket from '../assets/images/Denim Jacket.jpg'
import trousers from '../assets/images/Formal Trousers.webp'
import silkPanjabi from '../assets/images/Silk Blend Panjabi.webp'
import linenShirt from '../assets/images/Casual Linen Shirt.webp'
import gerogetteShari from '../assets/images/Printed Georgette Saree.jpg'
import chinos from '../assets/images/Straight Fit Chinos.webp'
import structuredKurti from '../assets/images/Structured Kurti.webp'
import bomberJacket from '../assets/images/Bomber Jacket.webp'

export const products = [
  {
    id: 1,
    name: "Classic Cotton Panjabi",
    category: "Panjabi",
    price: 1490,
    image: panjabi,
    gallery: ["panjabi", "panjabi"],
    rating: 4.5,
    reviews: 128,
    colors: ["White", "Navy"],
    sizes: ["M", "L", "XL"],
    inStock: true,
    isNew: true,
    description:
      "A relaxed, breathable panjabi cut from combed cotton. Stitched for everyday wear — mosque on Friday, dinner on Saturday.",
  },
  {
    id: 2,
    name: "Slim Fit Oxford Shirt",
    category: "Shirts",
    price: 1290,
    image: oxfordShirt,
    gallery: [oxfordShirt, oxfordShirt],
    rating: 4.2,
    reviews: 76,
    colors: ["Sky Blue", "White"],
    sizes: ["S", "M", "L"],
    inStock: true,
    isNew: false,
    description:
      "A tailored oxford shirt with a soft collar roll. Works under a blazer or on its own with sleeves pushed up.",
  },
  {
    id: 3,
    name: "Handloom Cotton Saree",
    category: "Saree",
    price: 2450,
    image: cottonShari,
    gallery: [ cottonShari, cottonShari],
    rating: 4.8,
    reviews: 214,
    colors: ["Maroon", "Green"],
    sizes: ["Free Size"],
    inStock: true,
    isNew: false,
    description:
      "Handwoven on traditional looms, finished with a contrast border. Light enough for daily wear, rich enough for occasions.",
  },
  {
    id: 4,
    name: "Embroidered Kurti",
    category: "Kurti",
    price: 1690,
    image: kurti,
    gallery: [ kurti, kurti],
    rating: 4.4,
    reviews: 93,
    colors: ["Mustard", "Black"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    isNew: true,
    description:
      "Hand-embroidered detailing along the neckline, cut for a relaxed, flattering fit through the body.",
  },
  {
    id: 5,
    name: "Denim Jacket",
    category: "Jackets",
    price: 3200,
    image: jacket,
    gallery: [jacket, jacket],
    rating: 4.6,
    reviews: 152,
    colors: ["Indigo"],
    sizes: ["M", "L", "XL"],
    inStock: false,
    isNew: false,
    description:
      "A washed denim jacket with a broken-in feel from day one. Layer it over anything.",
  },
  {
    id: 6,
    name: "Formal Trousers",
    category: "Trousers",
    price: 1850,
    image: trousers,
    gallery: [ trousers, trousers],
    rating: 4.1,
    reviews: 61,
    colors: ["Charcoal", "Black"],
    sizes: ["30", "32", "34", "36"],
    inStock: true,
    isNew: false,
    description:
      "A tapered, flat-front trouser in a mid-weight twill. Holds its crease through a full working day.",
  },
  {
    id: 7,
    name: "Silk Blend Panjabi",
    category: "Panjabi",
    price: 2890,
    image: silkPanjabi,
    gallery: [silkPanjabi, silkPanjabi],
    rating: 4.7,
    reviews: 108,
    colors: ["Ivory", "Gold"],
    sizes: ["M", "L", "XL", "XXL"],
    inStock: true,
    isNew: true,
    description:
      "A silk-cotton blend with a subtle sheen — built for Eid mornings and wedding evenings alike.",
  },
  {
    id: 8,
    name: "Casual Linen Shirt",
    category: "Shirts",
    price: 1590,
    image: linenShirt,
    gallery: [linenShirt, linenShirt],
    rating: 4.3,
    reviews: 84,
    colors: ["Beige", "White"],
    sizes: ["S", "M", "L"],
    inStock: true,
    isNew: false,
    description:
      "Linen that softens with every wash. Breathable enough for the peak of summer.",
  },
  {
    id: 9,
    name: "Printed Georgette Saree",
    category: "Saree",
    price: 2190,
    image: gerogetteShari,
    gallery: [ gerogetteShari, gerogetteShari],
    rating: 4.5,
    reviews: 97,
    colors: ["Teal", "Pink"],
    sizes: ["Free Size"],
    inStock: true,
    isNew: false,
    description:
      "A flowing georgette drape with an all-over print. Comes with a matching unstitched blouse piece.",
  },
  {
    id: 10,
    name: "Straight Fit Chinos",
    category: "Trousers",
    price: 1690,
    image: chinos,
    gallery: [chinos, chinos],
    rating: 4.0,
    reviews: 54,
    colors: ["Olive", "Stone"],
    sizes: ["30", "32", "34"],
    inStock: true,
    isNew: false,
    description:
      "A straight leg with a touch of stretch. Goes from desk to dinner without a change of clothes.",
  },
  {
    id: 11,
    name: "Structured Kurti",
    category: "Kurti",
    price: 1990,
    image: structuredKurti,
    gallery: [structuredKurti, structuredKurti],
    rating: 4.6,
    reviews: 71,
    colors: ["Rust", "Cream"],
    sizes: ["S", "M", "L"],
    inStock: true,
    isNew: true,
    description:
      "A boxier silhouette with side slits, built to layer over leggings or straight pants.",
  },
  {
    id: 12,
    name: "Bomber Jacket",
    category: "Jackets",
    price: 3450,
    image: bomberJacket,
    gallery: [bomberJacket, bomberJacket],
    rating: 4.4,
    reviews: 88,
    colors: ["Black", "Olive"],
    sizes: ["M", "L", "XL"],
    inStock: false,
    isNew: false,
    description:
      "Ribbed cuffs, a snap-button placket, and a fit that sits right at the hip.",
  },
];

export const categories = [...new Set(products.map((p) => p.category))];
