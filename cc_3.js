let customers = [
  {
    name: "Reece James",
    email: "james@gmail.com",
    purchases: ["Macbook", "Airpods"]
  },
  {
    name: "Cole Palmer",
    email: "palmer@gmail.com",
    purchases: ["Iphone", "Charger"]
  },
  {
    name: "Joao Pedro",
    email: "pedro@gmail.com",
    purchases: ["Ipad"]
  }
];

customers.push({
  name: "Estevao Willian",
  email: "willian@gmail.com",
  purchases: ["Applewatch"]
});

customers.shift();

customers[0].email = "cole@gmail.com";

customers[1].purchases.push("Phone case");

customers.forEach(customer => {
  console.log(`${customer.name} | ${customer.email} | Total purchases: ${customer.purchases.length}`);
});