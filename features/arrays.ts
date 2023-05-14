const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
// car = carMakers[0]; // TESTING
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-10'];
