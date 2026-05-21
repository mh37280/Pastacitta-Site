export type CateringItem = {
  name: string;
  price: string;
};

export type CateringSection = {
  id: string;
  title: string;
  eyebrow: string;
  items: CateringItem[];
};

export const cateringSections: CateringSection[] = [
  {
    id: "catering-salad",
    title: "Salad",
    eyebrow: "Trays for sharing",
    items: [
      { name: "Rocket Salad", price: "$75" },
      { name: "Italian Salad", price: "$70" },
      { name: "Greek Salad", price: "$75" },
      { name: "Capress Salad", price: "$80" },
      { name: "Caesar Salad", price: "$80" },
      { name: "Chicken Caesar Salad", price: "$100" },
    ],
  },
  {
    id: "catering-red",
    title: "Pasta Red Sauce",
    eyebrow: "Tomato base",
    items: [
      { name: "Napolitana", price: "$75" },
      { name: "Arrabiata", price: "$75" },
      { name: "Bolognese", price: "$90" },
      { name: "Siciliana", price: "$85" },
      { name: "Beef Chorizo", price: "$90" },
      { name: "Puttanesca", price: "$85" },
      { name: "Lamb Ragu", price: "$90" },
      { name: "Marinara", price: "$100" },
      { name: "Gamberi", price: "$100" },
    ],
  },
  {
    id: "catering-white",
    title: "Pasta White Sauce",
    eyebrow: "Cream base",
    items: [
      { name: "Chicken Mushroom", price: "$90" },
      { name: "Boscaiola", price: "$90" },
      { name: "Carbonara", price: "$90" },
      { name: "Formaggi Gorgonzola", price: "$90" },
      { name: "Pesto", price: "$90" },
    ],
  },
  {
    id: "catering-pink",
    title: "Pasta Pink Sauce",
    eyebrow: "Pink sauce",
    items: [
      { name: "Rose", price: "$80" },
      { name: "Pollo Fungi", price: "$90" },
      { name: "Mare Monte", price: "$100" },
      { name: "Salmon", price: "$100" },
      { name: "Crab Meat", price: "$100" },
    ],
  },
  {
    id: "catering-olio",
    title: "Pasta Aglio e Olio",
    eyebrow: "Garlic & oil",
    items: [
      { name: "King Prawns", price: "$100" },
      { name: "Vegetarian", price: "$85" },
    ],
  },
  {
    id: "catering-risotto",
    title: "Risotto",
    eyebrow: "Risotto trays",
    items: [
      { name: "Chicken Risotto", price: "$90" },
      { name: "Porcini Mushroom Risotto", price: "$90" },
      { name: "Vegetarian Risotto", price: "$90" },
      { name: "Salmon Risotto", price: "$100" },
      { name: "Prawns Risotto", price: "$100" },
      { name: "Seafood Risotto", price: "$100" },
    ],
  },
];
