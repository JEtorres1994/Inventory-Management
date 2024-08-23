// Jorge's Healthy Restaurant POS
var prompt = require('prompt-sync')();
var inventory = require('./current_Inventory.json');
var specials = require('./specials.json');
var validator = require('validator');
var date = new Date();
const day = date.getDay();
var name = greet(); 
var tax = 1.07

var retry = 2

function greet() {
    name = prompt('What is your name ? ');
        if (!validator.isAlpha(name)){
            console.log("Invalid, Good bye")
            process.exit()
        }
    console.log("Good Day, "+name+ "!");
    return name;
    }
console.log("Today is "+JSON.stringify(specials.Specials[day].Day)+".");
    if ( day == 0|| day == 6 ){
        console.log( JSON.stringify(specials.Specials[day].Protein) );
        process.exit()
    }
console.log("The special of the day is " + JSON.stringify(specials.Specials[day].Protein) +" with the side of "+ JSON.stringify(specials.Specials[day].Vegetables) + " and "+ JSON.stringify(specials.Specials[day].Fruit) + "." );
var sp = prompt("Do you want the special of the day?");
    if (sp == "yes"){
                var totalSP = specials.Specials[day].Price
                var TotalSP = [(totalSP * tax) + totalSP ]
                const TotalsSP = Math.round(TotalSP* 100) / 100
            console.log("Your total after taxes is " +TotalsSP+ ".");
            console.log("Thank you "+name+", order have been sent to the kitchen.");
            process.exit()
    }
    else if (sp == "no"){
function byom(){}
console.log("Build your meal");
var proteins = pickProtein();  
var sides = pickVegetable();
var fruits = pickFruit();
    }
function pickProtein() {
     console.log("Select your protein:  \n"+
                    "1: "  + JSON.stringify(inventory.Food.Protein[0].name)+ "\n"+
                    "2: "  + JSON.stringify(inventory.Food.Protein[1].name)+ "\n"+
                    "3: "  + JSON.stringify(inventory.Food.Protein[2].name)+ "\n"+
                    "4: "  + JSON.stringify(inventory.Food.Protein[3].name)+ "\n"+
                    "5: "  + JSON.stringify(inventory.Food.Protein[4].name))
                var protein = prompt("> ");
                    if (protein == 1 ) {
                        return (inventory.Food.Protein[0]) ;
                    } else if (protein == 2) {
                        return (inventory.Food.Protein[1]) ;
                    } else if (protein == 3) {
                        return (inventory.Food.Protein[2]) ;
                    } else if (protein == 4) {
                        return (inventory.Food.Protein[3]) ;
                    } else if (protein == 5) {
                        return (inventory.Food.Protein[4]) ;
                    } else { 
                        console.log("Invalid option, please pick a valid option.")
                        if (retry > 0) {
                            retry--;
                            return pickProtein()
                        }
                        console.log("Come back when you make up your mind... Good Bye.")
                        process.exit()
                    }                
} 
function pickVegetable() {
    console.log("Select your vegetable:  \n"+
                   "1: "  + JSON.stringify(inventory.Food.Vegetables[0].name)+ "\n"+
                   "2: "  + JSON.stringify(inventory.Food.Vegetables[1].name)+ "\n"+
                   "3: "  + JSON.stringify(inventory.Food.Vegetables[2].name)+ "\n"+
                   "4: "  + JSON.stringify(inventory.Food.Vegetables[3].name)+ "\n"+
                   "5: "  + JSON.stringify(inventory.Food.Vegetables[4].name))
               var vegetable = prompt("> ");
                   if (vegetable == 1 ) {
                       return  (inventory.Food.Vegetables[0]) ;
                   } else if (vegetable == 2) {
                       return (inventory.Food.Vegetables[1]) ;
                   } else if (vegetable == 3) {
                       return (inventory.Food.Vegetables[2]) ;
                   } else if (vegetable == 4) {
                       return (inventory.Food.Vegetables[3]) ;
                   } else if (vegetable == 5) {
                       return (inventory.Food.Vegetables[4]) ;
                   } else { 
                       console.log("Invalid option, please pick a valid option.")
                       if (retry > 0) {
                           retry--;
                           return pickVegetable()
                       }
                       console.log("Come back when you make up your mind... Good Bye.")
                       process.exit()
                   }  
} 
function pickFruit() {
    console.log("Select your side of fruit:  \n"+
                   "1: "  + JSON.stringify(inventory.Food.Fruit[0].name)+ "\n"+
                   "2: "  + JSON.stringify(inventory.Food.Fruit[1].name)+ "\n"+
                   "3: "  + JSON.stringify(inventory.Food.Fruit[2].name)+ "\n"+
                   "4: "  + JSON.stringify(inventory.Food.Fruit[3].name)+ "\n"+
                   "5: "  + JSON.stringify(inventory.Food.Fruit[4].name))
               var fruit = prompt("> ");
                   if (fruit == 1 ) {
                       return (inventory.Food.Fruit[0]) ;
                   } else if (fruit == 2) {
                       return (inventory.Food.Fruit[1]) ;
                   } else if (fruit == 3) {
                       return (inventory.Food.Fruit[2]) ;
                   } else if (fruit == 4) {
                       return (inventory.Food.Fruit[3]) ;
                   } else if (fruit == 5) {
                       return (inventory.Food.Fruit[4]) ;
                   } else { 
                       console.log("Invalid option, please pick a valid option.")
                       if (retry > 0) {
                           retry--;
                           return pickFruit()
                       } 
                       console.log("Come back when you make up your mind... Good Bye.")
                       process.exit()
                   }  
} 
var total = (proteins.price + sides.price + fruits.price);
var Total = [(total * .07) + total];
const Totals = Math.round(Total* 100) / 100;
console.log("Your order is "+proteins.name+", with a side of "+sides.name+" and "+fruits.name+" for a total price of $"+Totals+"." )
console.log("Thank you "+name+", order have been sent to the kitchen.");
process.exit()
