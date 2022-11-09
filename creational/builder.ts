type TGlass = 'Cup' | 'Glass' | 'Paper';
type TRecipe = 'Espresso' | 'Latte' | 'Cappuccino' | 'Ristretto';
type TDessert = 'Chocolate' | 'Candy';
type TTopping = 'Chocolate powder' | 'Cinnamon' | 'Pepper' | 'Ice cream';
type TMilk = 'Standard' | 'Lactose Free' | 'Low fat';

class Coffee {
    glass: TGlass;
    milk: TMilk;
    recipe: TRecipe;
    topping?: TTopping;
    dessert?: TDessert;

    constructor() {
        this.glass = 'Cup';
        this.milk = 'Standard';
        this.recipe = 'Espresso';
    }
}

class CoffeeBuilder {
    coffee: Coffee;

    constructor() {
        this.coffee = new Coffee();
    }

    useGlass(glass: TGlass) {
        this.coffee.glass = glass;

        return this;
    }

    useMilk(milk: TMilk) {
        this.coffee.milk = milk;

        return this;
    }

    useRecipe(recipe: TRecipe) {
        this.coffee.recipe = recipe;

        return this;
    }

    addTopping(topping: TTopping) {
        this.coffee.topping = topping;

        return this;
    }

    addDessert(dessert: TDessert) {
        this.coffee.dessert = dessert;

        return this;
    }

    // Production method. Usually called `build`.
    brew() {
        return this.coffee;
    }
}

const tastyCoffee = new CoffeeBuilder()
    .useGlass('Paper')
    .useMilk('Low fat')
    .useRecipe('Latte')
    .addTopping('Cinnamon')
    .addDessert('Chocolate')
    .brew();
