/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas
var favorite_fruits = ["Mango", "Kiwi", "Cherry"];
if (favorite_fruits.includes("Mango")) {
    console.log("I really like ".concat(favorite_fruits[0], "."));
}
else {
    console.log("I don't like this mango.");
}
if (favorite_fruits.includes("Kiwi")) {
    console.log("I really like ".concat(favorite_fruits[1], "."));
}
else {
    console.log("I don't like this kiwi.");
}
if (favorite_fruits.includes("Cherry")) {
    console.log("I really like ".concat(favorite_fruits[2], "."));
}
else {
    console.log("I don't like this cherry.");
}
if (favorite_fruits.includes("Apple")) {
    console.log("I really like apple.");
}
else {
    console.log("I don't like  apple.");
}
if (favorite_fruits.includes("banana")) {
    console.log("I really like banana.");
}
else {
    console.log("I don't like banana.");
}
