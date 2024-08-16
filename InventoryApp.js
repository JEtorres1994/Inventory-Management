// Jorge's Healthy Restaurant POS
var prompt = require('prompt-sync')();
var inventory = require('./current_Inventory.json');
var specials = require('./specials.json');
var validator = require('validator');
var date = new Date();
const day = date.getDay();
var name = greet(); 

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
console.log("The special of the day is " + JSON.stringify(specials.Specials[day].Protein)+" with the side of "+JSON.stringify(specials.Specials[day].Vegetables)+ " and "+JSON.stringify(specials.Specials[day].Fruit)+ ".");

var sp = prompt("Do you want the special of the day?");

    if (sp == "yes"){
            console.log("Thank you "+name+", order have been sent to the kitchen.");
            process.exit()
    }
    else if (sp == "no"){

console.log("Build your meal");

var proteins = pickProtein()  
var sides = pickVegetable()
var fruits = pickFruit()
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
                        return  JSON.stringify(inventory.Food.Protein[0].name) ;
                    } else if (protein == 2) {
                        return JSON.stringify(inventory.Food.Protein[1].name) ;
                    } else if (protein == 3) {
                        return JSON.stringify(inventory.Food.Protein[2].name) ;
                    } else if (protein == 4) {
                        return JSON.stringify(inventory.Food.Protein[3].name) ;
                    } else if (protein == 5) {
                        return JSON.stringify(inventory.Food.Protein[4].name) ;
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
    console.log("Select your protein:  \n"+
                   "1: "  + JSON.stringify(inventory.Food.Vegetables[0].name)+ "\n"+
                   "2: "  + JSON.stringify(inventory.Food.Vegetables[1].name)+ "\n"+
                   "3: "  + JSON.stringify(inventory.Food.Vegetables[2].name)+ "\n"+
                   "4: "  + JSON.stringify(inventory.Food.Vegetables[3].name)+ "\n"+
                   "5: "  + JSON.stringify(inventory.Food.Vegetables[4].name))

               var vegetable = prompt("> ");
                   if (vegetable == 1 ) {
                       return  JSON.stringify(inventory.Food.Vegetables[0].name) ;
                   } else if (vegetable == 2) {
                       return JSON.stringify(inventory.Food.Vegetables[1].name) ;
                   } else if (vegetable == 3) {
                       return JSON.stringify(inventory.Food.Vegetables[2].name) ;
                   } else if (vegetable == 4) {
                       return JSON.stringify(inventory.Food.Vegetables[3].name) ;
                   } else if (vegetable == 5) {
                       return JSON.stringify(inventory.Food.Vegetables[4].name) ;
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
    console.log("Select your protein:  \n"+
                   "1: "  + JSON.stringify(inventory.Food.Fruit[0].name)+ "\n"+
                   "2: "  + JSON.stringify(inventory.Food.Fruit[1].name)+ "\n"+
                   "3: "  + JSON.stringify(inventory.Food.Fruit[2].name)+ "\n"+
                   "4: "  + JSON.stringify(inventory.Food.Fruit[3].name)+ "\n"+
                   "5: "  + JSON.stringify(inventory.Food.Fruit[4].name))

               var fruit = prompt("> ");
                   if (fruit == 1 ) {
                       return  JSON.stringify(inventory.Food.Fruit[0].name) ;
                   } else if (fruit == 2) {
                       return JSON.stringify(inventory.Food.Fruit[1].name) ;
                   } else if (fruit == 3) {
                       return JSON.stringify(inventory.Food.Fruit[2].name) ;
                   } else if (fruit == 4) {
                       return JSON.stringify(inventory.Food.Fruit[3].name) ;
                   } else if (fruit == 5) {
                       return JSON.stringify(inventory.Food.Fruit[4].name) ;
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
        
console.log("To confirm your order is "+proteins+", with a side of "+sides+" and "+fruits+" ." )
    
