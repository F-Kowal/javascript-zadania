// Zadanie 1:
class Person {
    constructor(imie, nazwisko, wiek, kraj, miasto) {
      Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
    }
  
    printInfo() {
      for (let [key, value] of Object.entries(this)) {
        console.log(`${key}: ${value}`);
      }
    }
  
    addYearToAge() {
      this.wiek++;
    }
  
  }
  
  let person1 = new Person('Filip', 'Kowal', 23, 'Polska', 'Warszawa');
  let person2 = new Person('Anno', 'Dorian', 38, 'Francja', 'Paryż');
  
  person1.printInfo();
  person1.addYearToAge();
  person1.printInfo();
  
  // Zadanie 2:
  class Person {
    constructor(imie, nazwisko, wiek, kraj, miasto) {
      Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
    }
  
    printInfo() {
      for (let [key, value] of Object.entries(this)) {
        console.log(`${key}: ${value}`);
      }
    }
  
    addYearToAge() {
      this.wiek++;
    }
  
  }
  
  let person1 = new Person('Filip', 'Kowal', 23, 'Polska', 'Warszawa');
  let person2 = new Person('Anno', 'Dorian', 38, 'Francja', 'Paryż');
  
  person1.favDishes = ['Naleśniki', 'Rosół', 'Krewetki'];
  person2.favDishes = ['Maca', 'Stek', 'Ryż'];
  
  function printDishes() {
    console.log(this.favDishes);
  }
  
  function addDish(dish) {
    this.favDishes.push(dish)
  }
  
  person1.printDishes = printDishes;
  person2.printDishes = printDishes;
  person1.addDish = addDish;
  person2.addDish = addDish;
  
  person1.printDishes();
  person2.addDish('Pierogi');
  person2.printDishes();
  
  // Zadanie 3
  let calculator =  {
    a: 0,
    b: 0,
    numbers (a,b)  {
        this.a = a;
        this.b = b
    },
    adding () {
        console.log(this.a + this.b)
        return this.a + this.b 
    },
    substraction () {
        console.log(this.a - this.b)
        return this.a - this.b
    },
    dividing () {
        if (this.b == 0) {
            console.log('You cant divide if b = 0')
        }
        console.log(this.a / this.b)
        return this.a / this.b
    },
    multiplication () {
        console.log(this.a * this.b)
        return this.a * this.b
    },
}
calculator.numbers(2,4)
calculator.adding();
calculator.dividing();
calculator.substraction();
calculator.multiplication();
  
  
  // Zadanie 4:
  class ladderSimulator {
    constructor(steps) {
      this.steps = steps;
      this.currentStep = 0;
    }
    
    moveUp() {
      this.currentStep = this.currentStep <= 0 ? 1 : ++this.currentStep;
      if(this.currentStep > this.steps) {
        this.getOff();
      } else {
        console.log(`Idziesz stopień do góry - jesteś na stopniu nr ${this.currentStep}`);
      }
    }
    
    moveDown(){
      this.currentStep = this.currentStep >= this.steps ? this.steps : --this.currentStep;
      if(this.currentStep <= 0) {
        this.getOff();
      }  else {
        console.log(`Idziesz stopień w dół - jesteś na stopniu nr ${this.currentStep}`);
      }
    }
    
    getOff() {
      console.log('Zszedłeś z drabiny, nie możesz iść dalej');
    }
  
  }
  
  const ladder = new ladderSimulator(12);
  ladder.moveUp();
  ladder.moveUp();
  ladder.moveDown();
  ladder.moveDown();
  ladder.moveDown();
  ladder.moveUp();