/**
    1. Write a Greeter class with greet function that receives a name as input and outputs Hello <name>.
        The signature of greet should not change throughout the kata.
        You are allowed to construct Greeter object as you please.
    2. greet trims the input
    3. greet capitalizes the first letter of the name
    4. greet returns Good morning <name> when the time is 06:00-12:00
    5. greet returns Good evening <name> when the time is 18:00-22:00
    6. greet returns Good night <name> when the time is 22:00-06:00
    7. greet logs into console each time it is called
 */

class Greeter {
  constructor(currentTimeInMillisecondsFn) {
    this.currentTimeInMillisecondsFn = currentTimeInMillisecondsFn;
  }

  greet(name) {
    const trimName = name.trim();
    const theName = trimName.charAt(0).toUpperCase() + trimName.slice(1).toLowerCase();

    const currentTime = new Date(this.currentTimeInMillisecondsFn());
    const currentHour = currentTime.getHours();

    const greeting = `${this._getGreeting(currentHour)} ${theName}`;
    console.log(greeting);

    return greeting;
  }

  _getGreeting(currentHour) {
    let greeting;

    if (currentHour >= 6 && currentHour < 12) {
      greeting = "Good morning";
    } else if (currentHour >= 18 && currentHour < 22) {
      greeting = "Good evening";
    } else if (currentHour >= 22 || currentHour < 6) {
      greeting = "Good night";
    } else {
      greeting = "Hello";
    }

    return greeting;
  }
}

module.exports = Greeter;
