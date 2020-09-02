function Animal(sex) {
    this.sex = sex;
};
Animal.prototype.jump = function () {
    console.log('Jumping...');
};
Animal.prototype.run = function () {
    console.log('Running...');
};


function Mamal(sex) {
    Animal.call(this, sex);
};
Mamal.prototype = Object.create(Animal.prototype);
Mamal.prototype.constructor = Mamal;
Mamal.prototype.giveMilk = function () {
    if (this.sex === 'female') {
        console.log('Giving milk...');
    } else if (this.sex === 'male') {
        console.log('Sorry, males are incapable of giving milk');
    }
}

function Predator(sex) {
    Animal.call(this, sex);
};
Predator.prototype = Object.create(Mamal.prototype);
Predator.prototype.constructor = Predator;
Predator.prototype.eatMeat = function () {
    console.log('Eating meat...');
};

function Raccoon(sex) {
    Animal.call(this, sex);
};
Raccoon.prototype = Object.create(Predator.prototype);
Raccoon.prototype.constructor = Raccoon;
Raccoon.prototype.steal = function () {
    console.log('Stealing...');
    this.run();
};

const raccoon1 = new Raccoon('female');

console.log(raccoon1);
raccoon1.eatMeat();
raccoon1.giveMilk();
raccoon1.run();
raccoon1.jump();
raccoon1.steal();

const raccoon2 = new Raccoon('male');
console.log(raccoon2);
raccoon2.giveMilk();
raccoon2.run();
