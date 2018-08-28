////////////////////////////////////////////////
/////////////////Ninja Class 1 /////////////////
////////////////////////////////////////////////

// Assignment: Ninja Class
// Create a new object constructor called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// Ninja should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 Health to the Ninja
// Example Outputs
// var ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// -> "My ninja name is Hyabusa!"
// ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"



///////////////////////////////////////////
/////// Assignment: Ninja Class II/////////
///////////////////////////////////////////

// Complete the below challenges using Ninja from the previous assignment.

// .punch()
// Add a new method to Ninja called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. Your .punch() should display a console message like the below example.

// var blueNinja = new Ninja("Goemon");
// var redNinja = new Ninja("Bill Gates");
// redNinja.punch(blueNinja);
// // -> "Goemon was punched by Bill Gates and lost 5 Health!"
// .kick()
// Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and like .punch() will take another Ninja instance.

// blueNinja.kick(redNinja);
// // -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// // In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength
// Validations
// Update .punch() and .kick() so that they only accept Instances of Ninja. Hint: You will need to find a way to check the constructor of an instance. You will often need to consult outside documentation to find solutions for particular features.

// function Ninja(name) {
//   this.name = name;
//   this.health = 100;
//   var speed = 3;
//   var strength = 3;
//   this.sayName = function(){
//     return this.name;
//   }
//   this.drinkSake = function(){
//     this.health+=10;
//   }
//   this.punch = function(enemy) {
//     if (enemy.__proto__.constructor.name==='Ninja'){
//       enemy.health -= 5;
//       console.log(enemy.name + ' was punched by ' + this.name + ' and lost 5 Health!')
//     }
//     else {
//       console.log("You can't punch that, it ain't a ninja!")
//     }
//   }
//   this.kick = function(enemy) {
//     if (enemy.__proto__.constructor.name==='Ninja'){
//       let power= strength*15;
//       enemy.health -= power;
//       console.log(enemy.name + ' was kicked by ' + this.name + ' and lost ' + power + ' Health!')
//     }
//     else {
//       console.log("You can't kick that, it ain't a ninja!")
//     }
//   }
//   this.showStats = function(){
//     return ('Name: '+ this.name+ ', Health: ' + this.health + ', Speed: ' + showSpeed() + ', Strength: ' + showStrength())
//   }
//   function showSpeed(){
//     return speed;
//   }
//   function showStrength(){
//     return strength;
//   }
// }

// let warren = new Ninja('Warren-San')
// let cat = new Ninja('Sharp-fu')
// let poser = 'A Ninja'
// warren.punch(cat);
// warren.punch(poser)
// warren.kick(cat);
// console.log(warren.showStats())
// console.log(cat.showStats())
// console.log(warren)

///////////////////////////////////////////
/////// Assignment: Ninja Class III/////////
///////////////////////////////////////////

// Part I
// Recreate the base Ninja class from scratch using ES6 classes. Your Ninja needs the following public attributes (do not worry about private variables for this assignment):

// name
// health
// speed
// strength
// Speed and strength should be 3 by default. Health should be 100 by default.

// The Ninja class should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 health to the Ninja

// Part II - Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

// example output
// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
// superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }
  sayName(){
    return this.name;
  }
  drinkSake(){
    this.health += 10;
    return this;
  }
  showStats(){
    return (`Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`)
  }
}

class Sensei extends Ninja {
  constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom(){
    super.drinkSake();
    console.log("Don't half-ass two things, whole-ass one thing");
  }
}

const warren = new Ninja('Warren-san')
console.log(warren.sayName());
console.log(warren.drinkSake())
console.log(warren.showStats());
const sharps = new Sensei('Sharps-fu');
console.log(sharps.showStats())
sharps.speakWisdom()
console.log(sharps.showStats())

///////////////////////////////////////////
/////// Assignment: Deck of Cards I////////
///////////////////////////////////////////

// Create a Card class. A card should have the following functionality:

// Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
// Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
// Each Card should have a numerical value (1-13)
// Each Card should have a show method (log the card's information to the console)
// Create a Deck class. A deck should have the following functionality:

// The Deck should contain the 52 standard Cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random Card
// Deal should return the Card that was dealt and remove it from the Deck
// Now create a Player class. A Player should have the following functionality:

// The Player should have a name
// The Player should have a hand (an array of cards taken from a Deck)
// The Player should be able to take a Card (use the deck.deal method)
// The Player should be able to discard a Card

class Deck {
  constructor() {
      this.deck = [];
  }

  reset() {
      this.deck = [];
      const suits = ['Clubs', 'Hearts', 'Diamonds', 'Spades'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

      for (const suit of suits) {
          for (const value of values) {
              this.deck.push(`${ value } of ${ suit }`);
          }
      }

      return this;
  }

  shuffle() {
      let m = this.deck.length, t, i;
      while (m) {
          i = Math.floor(Math.random() * m--);
          t = this.deck[m];
          this.deck[m] = this.deck[i];
          this.deck[i] = t;
      }
      return this;
  }

  deal() {
      return this.deck.pop();
  }

}

class Player {
  constructor(name) {
      this.name = name;
      this.hand = [];
  }

  draw(deck) {
      this.hand.push(deck.deal());
      return this;
  }

  discard() {
      this.hand.pop();
      return this;
  }
}

const deck2 = new Deck();
deck2.reset().shuffle();
console.log(deck2);

const player2 = new Player("Ronnel");
player2.draw(deck2).draw(deck2);
console.log(player2);
console.log(deck2);
