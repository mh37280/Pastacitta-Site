export type PriceValue = string | { reg: string; lrg: string };

export type MenuItem = {
  name: string;
  description?: string;
  price: PriceValue;
  image?: string;
};

export type PastaOption = {
  name: string;
  extra?: string;
};

export type ComboItem = {
  name: string;
  price: string;
  description: string;
  tone: "green" | "red";
};

export type MenuSubsection = {
  title: string;
  items: MenuItem[];
};

export type MenuSection =
  | {
      id: string;
      title: string;
      eyebrow: string;
      note?: string;
      items: MenuItem[];
      type?: undefined;
    }
  | {
      id: string;
      title: string;
      eyebrow: string;
      note: string;
      type: "pasta-choice";
      options: PastaOption[];
    }
  | {
      id: string;
      title: string;
      eyebrow: string;
      note: string;
      type: "subsections";
      subsections: MenuSubsection[];
    }
  | {
      id: string;
      title: string;
      eyebrow: string;
      type: "combo";
      items: ComboItem[];
    };

export const menuPreviewSections = [
  {
    title: "Starters",
    description:
      "Arancini, garlic bread, bruschetta, garlic prawns, and wedges to kick off your meal.",
  },
  {
    title: "Salads",
    description:
      "Rocket, Caesar, Greek, Caprese, and more — crisp, fresh, and generous.",
  },
  {
    title: "Pizza",
    description:
      "Thirteen wood-fired pizzas from a classic Margherita to Seafood, Peri Peri Chicken, and beyond.",
  },
  {
    title: "Pasta Sauces",
    description:
      "Tomato, cream, pink, and aglio e olio — pick your base, then your pasta shape.",
  },
  {
    title: "Risotto & Mains",
    description:
      "Risotto, crumbed and grilled chicken and veal, served with chips or seasonal vegetables.",
  },
  {
    title: "Desserts & Sides",
    description:
      "House-made tiramisu, chocolate mousse, and sauces to round off your meal perfectly.",
  },
] as const;

export const fullMenuSections: MenuSection[] = [
  {
    id: "starters",
    title: "Starters",
    eyebrow: "To start",
    items: [
      { name: "Arancini", description: "Ask for the flavour.", price: "$12", image: "/img/Starters/Arancini.jpg" },
      { name: "Garlic Bread", description: "Classic oven-finished garlic bread.", price: "$5", image: "/img/Starters/Garlic%20Bread.jpg" },
      { name: "Cheesy Garlic Bread", description: "Loaded with melted cheese.", price: "$8", image: "/img/Starters/Cheesy%20Garlic%20Bread.jpg" },
      { name: "Tomato Bruschetta", description: "Tomato, herbs, and toasted bread.", price: "$10", image: "/img/Starters/Tomato%20Bruschetta.jpg" },
      { name: "Bowl of Chips", description: "Hot chips for the table.", price: { reg: "$7", lrg: "$10" }, image: "/img/Starters/Chips.jpg" },
      { name: "Side of Vegetable", description: "Seasonal vegetables.", price: "$16", image: "/img/Starters/Side%20of%20Vegetables.jpg" },
      { name: "Garlic Prawns", description: "Served with garlic bread.", price: "$24", image: "/img/Starters/Garlic%20Prawns.jpg" },
      { name: "Chicken Nuggets with Chips", description: "Family-friendly favourite.", price: "$16", image: "/img/Starters/Chicken%20Nuggets%20With%20Chips.jpg" },
      { name: "Potato Wedges", description: "With sweet chilli and sour cream.", price: { reg: "$11", lrg: "$14" }, image: "/img/Starters/Potatoes%20Wedges.jpg" },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    eyebrow: "Fresh & light",
    items: [
      {
        name: "Rocket Salad",
        description: "Rocket, shaved parmesan cheese, balsamic vinegar, extra virgin olive oil, apple, and walnuts.",
        price: { reg: "$16", lrg: "$23" },
        image: "/img/Salads/Rocket%20Salad.jpg",
      },
      {
        name: "Italian Salad",
        description: "Mixed lettuce, tomato, cucumber, olives, white vinegar, and extra virgin oil.",
        price: { reg: "$14", lrg: "$21" },
        image: "/img/Salads/Italian%20Salad.jpg",
      },
      {
        name: "Greek Salad",
        description: "Mixed lettuce, tomato, cucumber, olives, capsicum, feta cheese, and spinach onion.",
        price: { reg: "$15", lrg: "$22" },
        image: "/img/Salads/Greek%20Salad.jpg",
      },
      {
        name: "Caprese Salad",
        description: "Tomato, bocconcini cheese, basil, balsamic vinegar, and extra virgin olive oil.",
        price: "$16",
        image: "/img/Salads/Capress%20Salad.jpg",
      },
      {
        name: "Caesar Salad",
        description: "Cos lettuce, croutons, beef rasher, and parmesan cheese.",
        price: { reg: "$16", lrg: "$23" },
        image: "/img/Salads/Caesar%20Salad.jpg",
      },
      {
        name: "Chicken Caesar Salad",
        description: "Cos lettuce, croutons, chicken, and parmesan.",
        price: { reg: "$21", lrg: "$26" },
        image: "/img/Salads/Chicken%20Caesar%20Salaf.jpg",
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    eyebrow: "Wood-fired",
    items: [
      { name: "Cheesy Garlic Pizza", description: "Cheese, garlic, and oregano.", price: "$18" },
      { name: "Margherita", description: "Tomato sauce, mozzarella cheese, and herbs.", price: "$20", image: "/img/Pizza/Margarita.jpg" },
      { name: "Vegetarian Pizza", description: "Mushroom, capsicum, onion, olives, and eggplant.", price: "$24", image: "/img/Pizza/Vegetarian.jpg" },
      { name: "BBQ Chicken", description: "Chicken, onion, mushroom, and BBQ sauce.", price: "$24" },
      { name: "Chicken Pesto", description: "Pesto sauce base, mushroom, capsicum, onion, chicken, and feta cheese.", price: "$24" },
      { name: "Tandoori Chicken", description: "Tandoori chicken breast, capsicum, and olives.", price: "$24", image: "/img/Pizza/Tandoori.jpg" },
      { name: "Peri Peri Chicken", description: "Chicken, mushroom, capsicum, onion, and peri peri sauce.", price: "$24", image: "/img/Pizza/Peri%20peri.jpg" },
      { name: "Supreme Pizza", description: "Pepperoni, mushroom, capsicum, onion, cabanossi, and olives.", price: "$24", image: "/img/Pizza/Supreme.jpg" },
      { name: "Hawaiian", description: "Meat rashers, pineapple, and cheese.", price: "$24", image: "/img/Pizza/Hawaiian.jpg" },
      { name: "Mexicana", description: "Pepperoni, capsicum, onion, olives, jalapenos, and chilli flakes.", price: "$24" },
      { name: "Meat Lovers", description: "Pepperoni, capsicum, cabanossi, meat rashers, and BBQ sauce.", price: "$25", image: "/img/Pizza/Meat%20Lover.jpg" },
      { name: "Prawn Pizza", description: "King prawns, garlic, chilli, and herbs.", price: "$28", image: "/img/Pizza/Prawns.jpg" },
      { name: "Seafood", description: "Tomato base, mixed seafood, garlic, basil, oregano, and rocket.", price: "$28" },
    ],
  },
  {
    id: "pasta-choice",
    title: "Pasta Sauce",
    eyebrow: "Build your pasta",
    type: "pasta-choice",
    note: "Step 1: Pick your pasta.",
    options: [
      { name: "Penne" },
      { name: "Spaghetti" },
      { name: "Linguine" },
      { name: "Fettuccine" },
      { name: "Potato Gnocchi", extra: "+$3" },
      { name: "Spinach & Ricotta Ravioli", extra: "+$3" },
      { name: "Beef Tortellini", extra: "+$3" },
      { name: "Gluten Free", extra: "+$3" },
    ],
  },
  {
    id: "tomato-sauce",
    title: "Tomato Sauce",
    eyebrow: "Tomato base",
    items: [
      { name: "Napolitana", description: "Tomato, garlic, and basil.", price: { reg: "$20", lrg: "$28" }, image: "/img/Tomatoes%20Sauce/Napolitana.jpg" },
      { name: "Arrabiata", description: "Napolitana and chilli.", price: { reg: "$20", lrg: "$28" }, image: "/img/Tomatoes%20Sauce/Arrabiata.jpg" },
      { name: "Bolognese", description: "Minced beef and tomato.", price: { reg: "$24", lrg: "$32" }, image: "/img/Tomatoes%20Sauce/Bolognese.jpg" },
      { name: "Siciliana", description: "Eggplant, ricotta, and olives.", price: { reg: "$23", lrg: "$31" }, image: "/img/Tomatoes%20Sauce/Siciliana.jpg" },
      { name: "Beef Chorizo", description: "Beef chorizo, capsicum, olives, and parsley.", price: { reg: "$24", lrg: "$32" }, image: "/img/Tomatoes%20Sauce/Beef%20Chorizo.jpg" },
      { name: "Puttanesca", description: "Anchovies, olives, capers, and chilli.", price: { reg: "$23", lrg: "$31" }, image: "/img/Tomatoes%20Sauce/Puttanesca.jpg" },
      { name: "Marinara", description: "Seafood mix, basil, and parsley.", price: { reg: "$28", lrg: "$36" }, image: "/img/Tomatoes%20Sauce/Marinara.jpg" },
      { name: "Gamberi", description: "King prawns, basil, parsley, and chilli.", price: { reg: "$28", lrg: "$36" }, image: "/img/Tomatoes%20Sauce/Gamberi.jpg" },
    ],
  },
  {
    id: "fresh-cream-sauce",
    title: "Fresh Cream Sauce",
    eyebrow: "Cream base",
    items: [
      { name: "Chicken Mushroom", description: "Chicken, mushroom, and shallots.", price: { reg: "$24", lrg: "$32" }, image: "/img/Cream%20Sauce/Chicken%20Mushroom.jpg" },
      { name: "Boscaiola", description: "Beef rasher, mushrooms, and shallots.", price: { reg: "$24", lrg: "$32" }, image: "/img/Cream%20Sauce/Boscaiola.jpg" },
      { name: "Carbonara", description: "Beef rasher, shallots, eggs, and cheese.", price: { reg: "$24", lrg: "$32" }, image: "/img/Cream%20Sauce/Carbonara.jpg" },
      { name: "Formaggi Gorgonzola", description: "Four cheese and parmesan.", price: { reg: "$24", lrg: "$32" }, image: "/img/Cream%20Sauce/Formaggi%20Gorgonzola.jpg" },
      { name: "Basil Pesto", description: "Fresh basil and pine nuts.", price: { reg: "$24", lrg: "$32" }, image: "/img/Cream%20Sauce/Basil%20Pesto.jpg" },
    ],
  },
  {
    id: "pink-sauce",
    title: "Pink Sauce",
    eyebrow: "Pink sauce",
    items: [
      { name: "Rose", description: "Tomato, garlic, basil, and cream.", price: { reg: "$22", lrg: "$30" }, image: "/img/Pink%20Sauce/Rose.jpg" },
      { name: "Pollo ai Funghi", description: "Chicken, sundried tomato, mushroom, and shallots.", price: { reg: "$24", lrg: "$32" } },
      { name: "Mara Monte", description: "King prawns, mushroom, and shallots.", price: { reg: "$28", lrg: "$36" }, image: "/img/Pink%20Sauce/Mare%20Monte.jpg" },
      { name: "Salmon", description: "Salmon, shallots, capers, and dill.", price: { reg: "$28", lrg: "$36" } },
    ],
  },
  {
    id: "aglio-olio",
    title: "Aglio e Olio Sauces",
    eyebrow: "Garlic & oil",
    items: [
      { name: "King Prawns Olio", description: "King prawns, garlic, chilli, and rocket.", price: { reg: "$28", lrg: "$36" }, image: "/img/Other/King%20Prawns%20Olio.jpg" },
      { name: "Vegetarian Olio", description: "Mixed vegetables, garlic, chilli, and rocket.", price: { reg: "$23", lrg: "$30" } },
    ],
  },
  {
    id: "oven-baked-pasta",
    title: "Oven Baked Pasta",
    eyebrow: "Oven baked",
    items: [
      { name: "Beef Lasagna", description: "Baked classic beef lasagna.", price: "$26", image: "/img/Other/Lasagna.jpg" },
      { name: "Spinach Cannelloni", description: "Spinach-filled cannelloni.", price: "$22", image: "/img/Other/Caniloni.jpg" },
    ],
  },
  {
    id: "risotto",
    title: "Risotto",
    eyebrow: "Risotto",
    items: [
      { name: "Chicken Risotto", description: "Chicken, shallots, and pink sauce.", price: { reg: "$24", lrg: "$32" }, image: "/img/Other/Chicken%20Risotto.jpg" },
      { name: "Porcini Mushroom", description: "Porcini mushroom and shallots.", price: { reg: "$24", lrg: "$32" }, image: "/img/Other/Mushroom%20Risotto.jpg" },
      { name: "Salmon", description: "Salmon, capers, shallots, and pink sauce.", price: { reg: "$28", lrg: "$36" }, image: "/img/Other/Salmon%20Risotto.jpg" },
      { name: "Prawns", description: "Prawns, shallots, rocket, and cream sauce.", price: { reg: "$28", lrg: "$36" } },
      { name: "Seafood", description: "Mixed seafood and napolitana.", price: { reg: "$28", lrg: "$36" }, image: "/img/Other/Seafood%20Risotto.jpg" },
    ],
  },
  {
    id: "chicken-veal",
    title: "Chicken & Veal Dishes",
    eyebrow: "Mains",
    note: "All served with vegetable or chips. Mashed potato +$2 extra.",
    type: "subsections",
    subsections: [
      {
        title: "Crumbed",
        items: [
          { name: "Schnitzel", description: "Classic crumbed cutlet.", price: "$22", image: "/img/Other/Crumb%20Schnitzel.jpg" },
          { name: "Milanese", description: "Mozzarella cheese with a hint of napolitana.", price: "$26" },
          { name: "Parmigiana", description: "Eggplant, mozzarella cheese, and a hint of napolitana.", price: "$28" },
        ],
      },
      {
        title: "Grilled",
        items: [
          { name: "Lemon", description: "Lemon juice and parsley.", price: "$28", image: "/img/Other/Lemon.jpg" },
          { name: "Avocado", description: "Avocado, cream, and parsley.", price: "$28", image: "/img/Other/Avacado.jpg" },
          { name: "Funghi", description: "Mushroom, cream, and shallots.", price: "$28", image: "/img/Other/Funghi.jpg" },
          { name: "Mexicana", description: "Napolitana, capsicum, olives, and chilli.", price: "$28", image: "/img/Other/Mexicana.jpg" },
        ],
      },
    ],
  },
  {
    id: "combo",
    title: "Combo",
    eyebrow: "Value meals",
    type: "combo",
    items: [
      {
        name: "Pasta with Chicken Schnitzel or Veal Schnitzel",
        price: "$31",
        description: "Extras: risottos +$4, seafood +$4, sauce on chicken or veal +$2 to $4.",
        tone: "green",
      },
      {
        name: "La Citta Plate",
        price: "$31",
        description: "Rice, chicken grill, chips, and sauce on the side.",
        tone: "red",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    eyebrow: "To finish",
    items: [
      { name: "Home Made Tiramisu", description: "House-made Italian dessert.", price: "$11" },
      { name: "Chocolate Mousse", description: "Rich chocolate finish.", price: "$11" },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    eyebrow: "On the side",
    items: [
      { name: "Mushroom Sauce", description: "Add-on sauce.", price: "$7" },
      { name: "Mashed Potatoes", description: "Creamy side dish.", price: "$8" },
      { name: "Gravy Sauce", description: "Rich gravy.", price: "$8" },
      { name: "Diane Sauce", description: "Classic diane sauce.", price: "$8" },
      { name: "Pepper Sauce", description: "Pepper finish.", price: "$8" },
    ],
  },
];
