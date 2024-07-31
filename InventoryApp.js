var prompt = require('prompt-sync')();
var inventory = require('./current_Inventory.json');
var specials = require('./specials.json');
var date = new Date();

const day = date.getDay();

var name = prompt('What is your name ? ');

console.log("Hello "+name+ ", !");
console.log("Today is "+JSON.stringify(specials.Specials[day].Day)+"")
console.log("Here is today specials " + JSON.stringify(specials.Specials[day].Protein)+" with the side of "+JSON.stringify(specials.Specials[day].Vegetables)+ " and "+JSON.stringify(specials.Specials[day].Fruit))

//var order = prompt('Do you want the special of the day?');


//console.log("here is today specials " + JSON.stringify(inventory.Food.Protein[0].name))





/*
console.log("setect your next day off: \n"+
                  "1: Monday \n"+
                "2: Tuesday \n"+
                "3: Wednesday \n"+
                "4: Thursday \n"+
                "5: Friday\n"+
                "6: Saturday\n"+
                "7: Sunday")

var day = "";

var date = prompt("> ");

if (date == 1) {
   day = "Monday";
} else if (date == 2) {
    day = ("Tuesday");
} else if (date == 3) {
    day =("Wednesday");
} else if (date == 4) {
    day = ("Thursday");
} else if (date == 5) {
    day = ("Friday");
} else if (date == 6) {
    day = ("Saturday");
} else if (date == 7) {
    day = ("Sunday");
} else {
    console.log("unavailable");
}

console.log("Select your favorite musical from this list: \n"+
    "1: Mama Mia \n"+
    "2: Beetlejuice \n"+
    "3: Moulin Rouge \n"+
    "4: Hamilton \n"+
    "5: Cabaret \n"+
    "6: The Lion King\n"+
    "7: Hairspray")

var event = "";

var event = prompt("> ");

if (event == 1) {
    event = "Mama Mia";
 } else if (event == 2) {
    event = ("Beetlejuice");
 } else if (event == 3) {
    event = ("Moulin Rouge");
 } else if (event == 4) {
    event = ("Hamilton");
 } else if (event == 5) {
    event = ("Cabaret");
 } else if (event == 6) {
    event = ("The Lion King");
 } else if (event == 7) {
    event = ("Hairspray");
 } else {
    event = ("The book of Mormon");
    }

console.log(" "+name+ " will be attending the show of " +event+ " the night of " +day+ " ")



djfj

*/

