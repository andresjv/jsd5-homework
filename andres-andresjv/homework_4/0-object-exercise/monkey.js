/* Work with a partner to create objects for three different monkeys (called monkey1, monkey2, monkey3), each with the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(food)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Choose which partner will initially take the pair programming role of driver and who will be the observer. 
Switch roles after creating the first object, then again after creating the second. 
Also be sure each partner takes a turn in each role during the exercise steps below.

Exercise your monkeys by retrieving their properties and using their methods. 
Practice using both syntaxes for retrieving properties (dot notation and brackets).

*/


var monkey1 = {
    name:"adam",
    species:"blue",
    foodsEaten:["banana","cheese","apple"]
};

var monkey2 = {
    name:"ben",
    species:"red",
    foodsEaten:["banana","fries","chicken"]
};

var monkey3 = {
    name:"carl",
    species:"pink",
    foodsEaten:["banana","meat","carrot"]
};



// Functions for eat something
monkey1.eatSomething = function(food){
    monkey1.foodsEaten.push(food);
    console.log(monkey1.foodsEaten);
}

monkey2.eatSomething = function(food){
    monkey2.foodsEaten.push(food);
    console.log(monkey2.foodsEaten);
}

monkey3.eatSomething = function(food){
    monkey3.foodsEaten.push(food);
    console.log(monkey3.foodsEaten);
}


// Functions for Introduce themselves
monkey1.introduce = function(){
    for(var prop in monkey1){
        console.log(prop + " is " + monkey1[prop] + "\n");
    }
}