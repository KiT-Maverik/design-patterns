interface IState {
    eat: () => void;
    speak: () => void;
}

class Human implements IState {
    private state: IState = new Vegan();

    eat() { this.state.eat(); }

    speak() { this.state.speak(); }

    setState(state: IState) { this.state = state; }

}

class Vegan implements IState {
    eat() { console.log('🥑🥕🍌🍏 - Delicious food!'); }
    speak() { console.log('I am vegan!'); }
}

class Fatty implements IState {
    eat() { console.log('🥤🍔 - Yammy!'); }
    speak() { console.log('Fat check!'); }
}

class Zombie implements IState {
    eat() { console.log('🧠🧠🧠 - OM-NOM-NOM'); }
    speak() { console.log('Braaainsssss'); }
}

// PROOF OF CONCEPT

const human = new Human();

human.eat();
human.speak();

human.setState(new Fatty());

human.eat();
human.speak();

human.setState(new Zombie());

human.eat();
human.speak();
