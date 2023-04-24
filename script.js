const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseInt(tax[913]) / 100
const startingAfterTax = salary * (1 - taxAsDecimal)
const type = lodging + size
const balance = startingAfterTax- expenses.transport - expenses.food// - expenses.rent.type 
console.log(balance)


/* 
tax = 12/100=0.12
startingAfterTax= 4000*(1-0.12)=4000*0.88=3520
type =apartment +large
balance = startingAfterTax - transport-food-rent
balance = 3520-10.2-51.7501-800=2658.0499
*/
