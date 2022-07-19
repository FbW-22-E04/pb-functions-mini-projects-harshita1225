// The Fortune Teller

function tellFortune(noc, partner, job, city) {
  return `"You will be a ${job} in ${city}, and married to ${partner} with ${noc} kids."`;
}
console.log(tellFortune(1, "yena", "teacher", "munich"));
console.log(tellFortune(3, "kina", "lawyer", "köln"));
console.log(tellFortune(2, "luna", "painter", "stuttgart"));

// The Puppy Age Calculator
function calculateDogAge(age, conversion) {
  return `Your doggie is ${age * conversion} years old in dog years!!`;
}

console.log(calculateDogAge(5, 7)); //--> 35
console.log(calculateDogAge(1, 7)); //--> 7
console.log(calculateDogAge(7, 5)); //here conversion is 5 years --> 35
// The Lifetime Supply Calculator

function calculateSupply(currentAge, amountPerDay) {
  let maxAge = 100;
  let years = maxAge - currentAge;
  return `You will need ${Math.round(
    years * 365.25 * amountPerDay
  )} peices to last you until the ripe old age of ${maxAge} with amount per day as ${amountPerDay}, with years in hand as ${years} as the currentage is ${currentAge}!!!`;
}

console.log(calculateSupply(22, 1.5));
console.log(calculateSupply(32, 5.5));
console.log(calculateSupply(72, 1.05));
// The Geometrizer

function calcCircufrence(r) {
  let circumferenceOfCircle = (2 * Math.PI * r).toFixed(3);
  return circumferenceOfCircle;
}

function calcArea(r) {
  let areaOfCircle = (Math.PI * r * r).toFixed(3);
  return areaOfCircle;
}
console.log(`Circumference of circle is`, calcCircufrence(4));
console.log(`Area of circle is`, calcArea(4));
// The Temperature Converter

function celsiusToFahrenheit(c) {
  let f;
  f = (c / 5) * 9 + 32;
  return ` ${c} °C is ${f} °F `;
}

console.log(celsiusToFahrenheit(1));

function fahrenheitToCelsius(f) {
  let c;
  c = ((f - 32) * 5) / 9;
  return ` ${f} °F is ${c.toFixed(3)} °C `;
}

console.log(fahrenheitToCelsius(33.8));
