const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Why we don't use tuples very often
// It's hard to understand what the data means at a glance
const carSpecs: [number, number] = [400, 3354];
const carStats = {
  horsePower: 400,
  weight: 3354,
};
