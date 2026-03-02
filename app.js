const menuPreviewSections = [
  {
    title: "Starters",
    description: "Arancini, garlic bread, bruschetta, chips, and garlic prawns presented as a proper section instead of a menu poster."
  },
  {
    title: "Pasta Sauces",
    description: "Tomato, fresh cream, pink, and aglio e olio sections with regular and large pricing kept structured."
  },
  {
    title: "Pizza",
    description: "From Margherita to Seafood, with descriptions ready to become selectable items in a future ordering flow."
  },
  {
    title: "Risotto & Mains",
    description: "Risotto, schnitzel, grilled dishes, and combos all broken into clean sections for easier browsing."
  },
  {
    title: "Desserts & Sides",
    description: "Finish with house desserts and side sauces without losing visual consistency across the full page."
  },
  {
    title: "Ordering Ready",
    description: "This structure is already much closer to a future cart than a static image menu, which avoids rebuilding later."
  }
];

const fullMenuSections = [
  {
    id: "starters",
    title: "Starters",
    items: [
      { name: "Arancini", description: "Ask for the flavour.", price: "$12" },
      { name: "Garlic Bread", description: "Classic oven-finished garlic bread.", price: "$5" },
      { name: "Cheesy Garlic Bread", description: "Loaded with melted cheese.", price: "$8" },
      { name: "Tomato Bruschetta", description: "Tomato, herbs, and toasted bread.", price: "$10" },
      { name: "Bowl of Chips", description: "Hot chips for the table.", price: { reg: "$7", lrg: "$10" } },
      { name: "Side of Vegetable", description: "Seasonal vegetables.", price: "$16" },
      { name: "Garlic Prawns", description: "Served with garlic bread.", price: "$24" },
      { name: "Chicken Nuggets with Chips", description: "Family-friendly favourite.", price: "$16" },
      { name: "Potato Wedges", description: "With sweet chilli and sour cream.", price: { reg: "$11", lrg: "$14" } }
    ]
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      {
        name: "Rocket Salad",
        description: "Rocket, shaved parmesan cheese, balsamic vinegar, extra virgin olive oil, apple, and walnuts.",
        price: { reg: "$16", lrg: "$23" }
      },
      {
        name: "Italian Salad",
        description: "Mixed lettuce, tomato, cucumber, olives, white vinegar, and extra virgin oil.",
        price: { reg: "$14", lrg: "$21" }
      },
      {
        name: "Greek Salad",
        description: "Mixed lettuce, tomato, cucumber, olives, capsicum, feta cheese, and spinach onion.",
        price: { reg: "$15", lrg: "$22" }
      },
      {
        name: "Caprese Salad",
        description: "Tomato, bocconcini cheese, basil, balsamic vinegar, and extra virgin olive oil.",
        price: "$16"
      },
      {
        name: "Caesar Salad",
        description: "Cos lettuce, croutons, beef rasher, and parmesan cheese.",
        price: { reg: "$16", lrg: "$23" }
      },
      {
        name: "Chicken Caesar Salad",
        description: "Cos lettuce, croutons, chicken, and parmesan.",
        price: { reg: "$21", lrg: "$26" }
      }
    ]
  },
  {
    id: "pizza",
    title: "Pizza",
    items: [
      { name: "Cheesy Garlic Pizza", description: "Cheese, garlic, and oregano.", price: "$18" },
      { name: "Margherita", description: "Tomato sauce, mozzarella cheese, and herbs.", price: "$20" },
      { name: "Vegetarian Pizza", description: "Mushroom, capsicum, onion, olives, and eggplant.", price: "$24" },
      { name: "BBQ Chicken", description: "Chicken, onion, mushroom, and BBQ sauce.", price: "$24" },
      {
        name: "Chicken Pesto",
        description: "Pesto sauce base, mushroom, capsicum, onion, chicken, and feta cheese.",
        price: "$24"
      },
      { name: "Tandoori Chicken", description: "Tandoori chicken breast, capsicum, and olives.", price: "$24" },
      {
        name: "Peri Peri Chicken",
        description: "Chicken, mushroom, capsicum, onion, and peri peri sauce.",
        price: "$24"
      },
      {
        name: "Supreme Pizza",
        description: "Pepperoni, mushroom, capsicum, onion, cabanossi, and olives.",
        price: "$24"
      },
      { name: "Hawaiian", description: "Meat rashers, pineapple, and cheese.", price: "$24" },
      {
        name: "Mexicana",
        description: "Pepperoni, capsicum, onion, olives, jalapenos, and chilli flakes.",
        price: "$24"
      },
      {
        name: "Meat Lovers",
        description: "Pepperoni, capsicum, cabanossi, meat rashers, and BBQ sauce.",
        price: "$25"
      },
      { name: "Prawn Pizza", description: "King prawns, garlic, chilli, and herbs.", price: "$28" },
      {
        name: "Seafood",
        description: "Tomato base, mixed seafood, garlic, basil, oregano, and rocket.",
        price: "$28"
      }
    ]
  },
  {
    id: "pasta-choice",
    title: "Pasta Sauce",
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
      { name: "Gluten Free", extra: "+$3" }
    ]
  },
  {
    id: "tomato-sauce",
    title: "Tomato Sauce",
    items: [
      { name: "Napolitana", description: "Tomato, garlic, and basil.", price: { reg: "$20", lrg: "$28" } },
      { name: "Arrabiata", description: "Napolitana and chilli.", price: { reg: "$20", lrg: "$28" } },
      { name: "Bolognese", description: "Minced beef and tomato.", price: { reg: "$24", lrg: "$32" } },
      { name: "Siciliana", description: "Eggplant, ricotta, and olives.", price: { reg: "$23", lrg: "$31" } },
      { name: "Beef Chorizo", description: "Beef chorizo, capsicum, olives, and parsley.", price: { reg: "$24", lrg: "$32" } },
      { name: "Puttanesca", description: "Anchovies, olives, capers, and chilli.", price: { reg: "$23", lrg: "$31" } },
      { name: "Marinara", description: "Seafood mix, basil, and parsley.", price: { reg: "$28", lrg: "$36" } },
      { name: "Gamberi", description: "King prawns, basil, parsley, and chilli.", price: { reg: "$28", lrg: "$36" } }
    ]
  },
  {
    id: "fresh-cream-sauce",
    title: "Fresh Cream Sauce",
    items: [
      { name: "Chicken Mushroom", description: "Chicken, mushroom, and shallots.", price: { reg: "$24", lrg: "$32" } },
      { name: "Boscaiola", description: "Beef rasher, mushrooms, and shallots.", price: { reg: "$24", lrg: "$32" } },
      { name: "Carbonara", description: "Beef rasher, shallots, eggs, and cheese.", price: { reg: "$24", lrg: "$32" } },
      { name: "Formaggi Gorgonzola", description: "Four cheese and parmesan.", price: { reg: "$24", lrg: "$32" } },
      { name: "Basil Pesto", description: "Fresh basil and pine nuts.", price: { reg: "$24", lrg: "$32" } }
    ]
  },
  {
    id: "pink-sauce",
    title: "Pink Sauce",
    items: [
      { name: "Rose", description: "Tomato, garlic, basil, and cream.", price: { reg: "$22", lrg: "$30" } },
      {
        name: "Pollo ai Funghi",
        description: "Chicken, sundried tomato, mushroom, and shallots.",
        price: { reg: "$24", lrg: "$32" }
      },
      { name: "Mara Monte", description: "King prawns, mushroom, and shallots.", price: { reg: "$28", lrg: "$36" } },
      { name: "Salmon", description: "Salmon, shallots, capers, and dill.", price: { reg: "$28", lrg: "$36" } }
    ]
  },
  {
    id: "aglio-olio",
    title: "Aglio e Olio Sauces",
    items: [
      { name: "King Prawns Olio", description: "King prawns, garlic, chilli, and rocket.", price: { reg: "$28", lrg: "$36" } },
      { name: "Vegetarian Olio", description: "Mixed vegetables, garlic, chilli, and rocket.", price: { reg: "$23", lrg: "$30" } }
    ]
  },
  {
    id: "oven-baked-pasta",
    title: "Oven Baked Pasta",
    items: [
      { name: "Beef Lasagna", description: "Baked classic beef lasagna.", price: "$26" },
      { name: "Spinach Cannelloni", description: "Spinach-filled cannelloni.", price: "$22" }
    ]
  },
  {
    id: "risotto",
    title: "Risotto",
    items: [
      { name: "Chicken Risotto", description: "Chicken, shallots, and pink sauce.", price: { reg: "$24", lrg: "$32" } },
      { name: "Porcini Mushroom", description: "Porcini mushroom and shallots.", price: { reg: "$24", lrg: "$32" } },
      { name: "Salmon", description: "Salmon, capers, shallots, and pink sauce.", price: { reg: "$28", lrg: "$36" } },
      { name: "Prawns", description: "Prawns, shallots, rocket, and cream sauce.", price: { reg: "$28", lrg: "$36" } },
      { name: "Seafood", description: "Mixed seafood and napolitana.", price: { reg: "$28", lrg: "$36" } }
    ]
  },
  {
    id: "chicken-veal",
    title: "Chicken & Veal Dishes",
    note: "All served with vegetable or chips. Mashed potato +$2 extra.",
    type: "subsections",
    subsections: [
      {
        title: "Crumbed",
        items: [
          { name: "Schnitzel", description: "Classic crumbed cutlet.", price: "$22" },
          { name: "Milanese", description: "Mozzarella cheese with a hint of napolitana.", price: "$26" },
          { name: "Parmigiana", description: "Eggplant, mozzarella cheese, and a hint of napolitana.", price: "$28" }
        ]
      },
      {
        title: "Grilled",
        items: [
          { name: "Lemon", description: "Lemon juice and parsley.", price: "$28" },
          { name: "Avocado", description: "Avocado, cream, and parsley.", price: "$28" },
          { name: "Funghi", description: "Mushroom, cream, and shallots.", price: "$28" },
          { name: "Mexicana", description: "Napolitana, capsicum, olives, and chilli.", price: "$28" }
        ]
      }
    ]
  },
  {
    id: "combo",
    title: "Combo",
    type: "combo",
    items: [
      {
        name: "Pasta with Chicken Schnitzel or Veal Schnitzel",
        price: "$31",
        description: "Extras: risottos +$4, seafood +$4, sauce on chicken or veal +$2 to $4.",
        tone: "green"
      },
      {
        name: "La Citta Plate",
        price: "$31",
        description: "Rice, chicken grill, chips, and sauce on the side.",
        tone: "red"
      }
    ]
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Home Made Tiramisu", description: "House-made Italian dessert.", price: "$11" },
      { name: "Chocolate Mousse", description: "Rich chocolate finish.", price: "$11" }
    ]
  },
  {
    id: "sides",
    title: "Sides",
    items: [
      { name: "Mushroom Sauce", description: "Add-on sauce.", price: "$7" },
      { name: "Mashed Potatoes", description: "Creamy side dish.", price: "$8" },
      { name: "Gravy Sauce", description: "Rich gravy.", price: "$8" },
      { name: "Diane Sauce", description: "Classic diane sauce.", price: "$8" },
      { name: "Pepper Sauce", description: "Pepper finish.", price: "$8" }
    ]
  }
];

const previewGrid = document.querySelector("#menu-preview-grid");
const menuSectionsRoot = document.querySelector("#menu-sections");
const menuCategoryNav = document.querySelector("#menu-category-nav");
const heroSection = document.querySelector(".hero-scroll");
const heroShiftPanel = document.querySelector(".hero-panel-shift");

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const splitItems = (items) => {
  const midpoint = Math.ceil(items.length / 2);
  return [items.slice(0, midpoint), items.slice(midpoint)];
};

const renderPrice = (price) => {
  if (typeof price === "string") {
    return `<div class="menu-entry-price">${price}</div>`;
  }

  return `
    <div class="menu-entry-price-stack">
      <span><small>Reg</small>${price.reg}</span>
      <span><small>Lrg</small>${price.lrg}</span>
    </div>
  `;
};

const renderMenuItems = (items) => {
  const [leftColumn, rightColumn] = splitItems(items);
  const columns = [leftColumn, rightColumn].filter((column) => column.length > 0);

  return `
    <div class="menu-section-grid">
      ${columns
        .map(
          (column) => `
            <div class="menu-column">
              ${column
                .map(
                  (item) => `
                    <article class="menu-entry">
                      <div class="menu-entry-copy">
                        <strong class="menu-entry-name">${item.name}</strong>
                        <p class="menu-entry-desc">${item.description}</p>
                      </div>
                      ${renderPrice(item.price)}
                    </article>
                  `
                )
                .join("")}
            </div>
          `
        )
        .join("")}
    </div>
  `;
};

const renderPreviewCards = () => {
  if (!previewGrid) {
    return;
  }

  previewGrid.innerHTML = menuPreviewSections
    .map(
      (section) => `
        <article class="preview-card" data-reveal>
          <p class="eyebrow">${section.title}</p>
          <h3>${section.title}</h3>
          <p>${section.description}</p>
        </article>
      `
    )
    .join("");
};

const renderFullMenu = () => {
  if (!menuSectionsRoot) {
    return;
  }

  menuSectionsRoot.innerHTML = fullMenuSections
    .map((section) => {
      const sectionId = section.id || slugify(section.title);

      if (section.type === "pasta-choice") {
        return `
          <section class="menu-section" id="${sectionId}" data-menu-section data-reveal>
            <div class="menu-section-heading centered-left">
              <p class="eyebrow">Menu Section</p>
              <h2>${section.title}</h2>
              <p class="menu-section-note">${section.note}</p>
            </div>
            <div class="menu-pasta-options">
              ${section.options
                .map(
                  (option) => `
                    <article class="menu-pasta-option">
                      <strong>${option.name}</strong>
                      ${option.extra ? `<small>${option.extra}</small>` : ""}
                    </article>
                  `
                )
                .join("")}
            </div>
          </section>
        `;
      }

      if (section.type === "subsections") {
        return `
          <section class="menu-section" id="${sectionId}" data-menu-section data-reveal>
            <div class="menu-section-heading">
              <p class="eyebrow">Menu Section</p>
              <h2>${section.title}</h2>
              <p class="menu-section-note">${section.note}</p>
            </div>
            <div class="menu-subsections">
              ${section.subsections
                .map(
                  (subsection) => `
                    <article class="menu-subsection">
                      <h3 class="menu-subsection-title">${subsection.title}</h3>
                      ${renderMenuItems(subsection.items)}
                    </article>
                  `
                )
                .join("")}
            </div>
          </section>
        `;
      }

      if (section.type === "combo") {
        return `
          <section class="menu-section" id="${sectionId}" data-menu-section data-reveal>
            <div class="menu-section-heading">
              <p class="eyebrow">Menu Section</p>
              <h2>${section.title}</h2>
            </div>
            <div class="menu-combo-grid">
              ${section.items
                .map(
                  (item) => `
                    <article class="combo-card combo-card-${item.tone}">
                      <div>
                        <h3>${item.name}</h3>
                        <p class="combo-price">${item.price}</p>
                        <p class="combo-note">${item.description}</p>
                      </div>
                    </article>
                  `
                )
                .join("")}
            </div>
          </section>
        `;
      }

      return `
        <section class="menu-section" id="${sectionId}" data-menu-section data-reveal>
          <div class="menu-section-heading">
            <p class="eyebrow">Menu Section</p>
            <h2>${section.title}</h2>
            ${section.note ? `<p class="menu-section-note">${section.note}</p>` : ""}
          </div>
          ${renderMenuItems(section.items)}
        </section>
      `;
    })
    .join("");
};

const renderCategoryNav = () => {
  if (!menuCategoryNav) {
    return;
  }

  menuCategoryNav.innerHTML = fullMenuSections
    .map((section, index) => {
      const sectionId = section.id || slugify(section.title);
      return `
        <a class="menu-category-link${index === 0 ? " is-active" : ""}" href="#${sectionId}" data-menu-link="${sectionId}">
          ${section.title}
        </a>
      `;
    })
    .join("");
};

const applyHeroProgress = () => {
  if (!heroSection) {
    return;
  }

  const heroTop = heroSection.offsetTop;
  const heroHeight = heroSection.offsetHeight - window.innerHeight;
  const progress = heroHeight > 0 ? Math.min(Math.max((window.scrollY - heroTop) / heroHeight, 0), 1) : 0;

  document.documentElement.style.setProperty("--hero-progress", progress.toFixed(3));
  document.body.classList.toggle("is-shifted", Boolean(heroShiftPanel) && progress > 0.42);
};

const setupRevealObserver = () => {
  const revealTargets = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealTargets.forEach((target) => observer.observe(target));
};

const setupMenuSectionTracking = () => {
  const sections = document.querySelectorAll("[data-menu-section]");
  const links = document.querySelectorAll("[data-menu-link]");

  if (!sections.length || !links.length) {
    return;
  }

  const activateLink = (id) => {
    links.forEach((link) => link.classList.toggle("is-active", link.dataset.menuLink === id));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

      if (visibleSection) {
        activateLink(visibleSection.target.id);
      }
    },
    {
      threshold: [0.2, 0.4, 0.6],
      rootMargin: "-20% 0px -55% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
};

renderPreviewCards();
renderFullMenu();
renderCategoryNav();
applyHeroProgress();
setupRevealObserver();
setupMenuSectionTracking();

window.addEventListener("scroll", applyHeroProgress, { passive: true });
window.addEventListener("resize", applyHeroProgress);
