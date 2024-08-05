// Jorge's Healthy Restaurant POS
var prompt = require('prompt-sync')();
var inventory = require('./current_Inventory.json');
var specials = require('./specials.json');
var validator = require('validator');
var date = new Date();

const day = date.getDay();

var name = prompt('What is your name ? ');
//console.log("validator = ", validator.isAlpha(name))
    if (!validator.isAlpha(name)){
        console.log("Invalid, Good bye")
        process.exit()
    }
console.log("Hello "+name+ ", !");


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
                console.log("Select your protein:  \n"+
                    "1: "  + JSON.stringify(inventory.Food.Protein[0].name)+ "\n"+
                    "2: "  + JSON.stringify(inventory.Food.Protein[1].name)+ "\n"+
                    "3: "  + JSON.stringify(inventory.Food.Protein[2].name)+ "\n"+
                    "4: "  + JSON.stringify(inventory.Food.Protein[3].name)+ "\n"+
                    "5: "  + JSON.stringify(inventory.Food.Protein[4].name))
                var proteins = ""  ;
                var protein = prompt("> ");
                    if (protein == 1) {
                        proteins = JSON.stringify(inventory.Food.Protein[0].name) ;
                    } else if (protein == 2) {
                        proteins = JSON.stringify(inventory.Food.Protein[1].name) ;
                    } else if (protein == 3) {
                        proteins = JSON.stringify(inventory.Food.Protein[2].name) ;
                    } else if (protein == 4) {
                        proteins = JSON.stringify(inventory.Food.Protein[3].name) ;
                    } else if (protein == 5) {
                        proteins = JSON.stringify(inventory.Food.Protein[4].name) ;
                    } else {
                        console.log("unavailable");
                    }

                console.log("Select your side: \n" +
                    "1:" +  JSON.stringify(inventory.Food.Vegetables[0].name)+ "\n"+
                    "2:" +  JSON.stringify(inventory.Food.Vegetables[1].name)+ "\n"+
                    "3:" +  JSON.stringify(inventory.Food.Vegetables[2].name)+ "\n"+
                    "4:" +  JSON.stringify(inventory.Food.Vegetables[3].name)+ "\n"+
                    "5:" +  JSON.stringify(inventory.Food.Vegetables[4].name)+ "\n"+
                    "6:" +  JSON.stringify(inventory.Food.Vegetables[5].name)+ "\n"+
                    "7:" +  JSON.stringify(inventory.Food.Vegetables[6].name))
                var sides =  "" ;
                var side = prompt("> ");
                    if (side == 1) {
                        sides = JSON.stringify(inventory.Food.Vegetables[0].name) ;
                    } else if (side == 2) {
                        sides = JSON.stringify(inventory.Food.Vegetables[1].name) ;
                    } else if (side == 3) {
                        sides = JSON.stringify(inventory.Food.Vegetables[2].name) ;
                    } else if (side == 4) {
                        sides = JSON.stringify(inventory.Food.Vegetables[3].name) ;
                    } else if (side == 5) {
                        sides = JSON.stringify(inventory.Food.Vegetables[4].name) ;
                    } else if (side == 6) {
                        sides = JSON.stringify(inventory.Food.Vegetables[3].name) ;
                    } else if (side == 7) {
                        sides = JSON.stringify(inventory.Food.Vegetables[4].name) ;
                    } else {
                        console.log("unavailable");
                    }

                console.log("Select a side of fruit: \n" +
                    "1:" +  JSON.stringify(inventory.Food.Fruit[0].name)+ "\n"+
                    "2:" +  JSON.stringify(inventory.Food.Fruit[1].name)+ "\n"+
                    "3:" +  JSON.stringify(inventory.Food.Fruit[2].name)+ "\n"+
                    "4:" +  JSON.stringify(inventory.Food.Fruit[3].name)+ "\n"+
                    "5:" +  JSON.stringify(inventory.Food.Fruit[4].name))
                var fruits = "" ;
                var fruit = prompt("> ");
                    if (fruit == 1) {
                        fruits =  JSON.stringify(inventory.Food.Fruit[0].name);
                    } else if (fruit == 2) {
                        fruits =  JSON.stringify(inventory.Food.Fruit[1].name);
                    } else if (fruit == 3) {
                        fruits =  JSON.stringify(inventory.Food.Fruit[2].name);
                    } else if (fruit == 4) {
                        fruits =  JSON.stringify(inventory.Food.Fruit[3].name);
                    } else if (fruit == 5) {
                        fruits =  JSON.stringify(inventory.Food.Fruit[4].name);
                    } else {
                        console.log("unavailable");
                    }          
        console.log("To confirm your order is "+proteins+", with a side of "+sides+" and "+fruits+" ." )
    } else {
        console.log("Invalid Option")
    }


  //var protein = prompt("Select your protein:  \n" ,






 /*   var protein = prompt("Select your protein:  \n" ,
        "1" + JSON.stringify(inventory.Food.Protein[0].name)+
        "2" + JSON.stringify(inventory.Food.Protein[1].name)+ 
        "3" + JSON.stringify(inventory.Food.Protein[2].name)+ 
        "4" + JSON.stringify(inventory.Food.Protein[3].name)+ 
        "5" + JSON.stringify(inventory.Food.Protein[4].name));
                                                    
     var protein =("");
  



   


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

