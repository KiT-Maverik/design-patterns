abstract class Assembler {
    build() {
        this.announce();
        this.buildBasement();
        this.buildWalls();
        this.mountRoof();
        this.decorate();
    }

    abstract announce(): void;
    abstract buildBasement(): void;
    abstract buildWalls(): void;
    abstract decorate(): void;
    abstract mountRoof(): void;
}

class BigHouse extends Assembler {
    announce() { console.log('Building a big house.'); }
    buildBasement() { console.log('Building a very big basement with massive walls.'); }
    buildWalls() { console.log('This is a big house - many walls have to be erected.'); }
    mountRoof() { console.log('Mounting roof for such a big house requires lots of effort.'); }
    decorate() { console.log('Finally! We are decorating our big house!'); }
}

class Bungalow extends Assembler {
    announce() { console.log('Building a bungalow.'); }
    buildBasement() { console.log('No need for basement in bungalow - we will just prepare platform.'); }
    buildWalls() { console.log('Bungalow is a very light house - we can erect its walls really fast.'); }
    mountRoof() { console.log('We will use some light materials for this roof.'); }
    decorate() { console.log('Lets add some tropic decorations to our fancy beach place.'); }
}

new BigHouse().build();
new Bungalow().build();
