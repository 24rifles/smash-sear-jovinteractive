export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
  note?: string;
}

export const menuData: MenuCategory[] = [
  {
    title: "BURGERS",
    items: [
      {
        name: "Loaded Smash",
        price: "$65",
        description: "Double beef, melted cheese, caramelized onions, tomato chutney and an egg, Purple slaw."
      },
      {
        name: "Spicy Smash",
        price: "$60",
        description: "Double beef, melted cheese, Crunchy onions, tomato chutney, scotch bonnet mayo."
      },
      {
        name: "Basic Smash",
        price: "$50",
        description: "Double beef, melted cheese, caramelized onion."
      },
      {
        name: "Jerk BBQ Beef Burger",
        price: "$60",
        description: "A single patty smothered in jerk BBQ sauce, melted cheese and crunchy onion, fried plantain, tomatoes."
      },
      {
        name: "Lamb Burger",
        price: "$70",
        description: "A perfectly seasoned patty topped with tomato chutney, feta cheese and tzatziki."
      },
      {
        name: "Chicken Sandwich",
        price: "$60",
        description: "Dipped in spicy BBQ sauce, topped with coleslaw and pickles."
      },
      {
        name: "Fish/Shrimp Sandwich",
        price: "$60",
        description: "Lettuce, tomato, sweet chili slaw."
      }
    ]
  },
  {
    title: "JAMAICAN TINGS",
    note: "available Thursday - Saturday",
    items: [
      {
        name: "Jerk Chicken",
        price: "$65",
        description: "Vegetable slaw, fried plantain & rice and peas"
      },
      {
        name: "Escoveitch Fish",
        price: "$75",
        description: "Whole snapper, spicy pickled vegetable, vegetable slaw, rice & peas and fried plantain"
      }
    ]
  },
  {
    title: "SIDES",
    items: [
      { name: "Loaded Fries", price: "$45" },
      { name: "Seasoned Fries", price: "$20" },
      { name: "Coleslaw", price: "$20" },
      { name: "Mac and Cheese", price: "$40" },
      { name: "Festival", price: "$20" },
      { name: "Cheesy Fries", price: "$25" }
    ]
  },
  {
    title: "PASTAS",
    items: [
      {
        name: "Alfredo/Jerk",
        price: "$60 / $65",
        description: "(Onions, sweet peppers, carrots). Add: Chicken +$25, Shrimp +$30, Roasted Veg +$20"
      },
      {
        name: "Curry Goat Pasta",
        price: "$80",
        description: "Boneless curried goat in creamy cheese sauce, onion, sweet pepper and carrot"
      }
    ]
  },
  {
    title: "CUTTERS",
    note: "Sauces: Buffalo, BBQ, Jerk",
    items: [
      { name: "Wings", price: "$55" },
      { name: "Shrimp Poppers", price: "$55" },
      { name: "Cauliflower Poppers", price: "$40" },
      { name: "Chicken Poppers", price: "$50" },
      { name: "Curry Goat Wontons", price: "$50", description: "(Fried or Steamed)" },
      { name: "Cream Cheese Wonton", price: "$45" }
    ]
  },
  {
    title: "BOWLS",
    note: "Add fries — $10",
    items: [
      {
        name: "Chicken/Shrimp Bang Bang",
        price: "$70",
        description: "Jasmine rice, corn salsa, pickled cucumber, lettuce"
      },
      {
        name: "Coconut Curry Chickpea",
        price: "$65",
        description: "Jasmine rice, corn salsa, pickled cucumber, cauliflower"
      }
    ]
  },
  {
    title: "VEGGIE LOVERS",
    items: [
      { name: "Black Bean Burger", price: "$55" },
      { name: "Chickpea Burger", price: "$55" },
      { name: "Garden Salad", price: "$55" },
      { name: "Spicy Bean Salad", price: "$55" }
    ]
  }
];
