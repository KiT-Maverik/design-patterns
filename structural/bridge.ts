class Artillery {

    shoot(x: number, y: number) {
        console.log(`Target (x: ${x}; y: ${y}) shot`);
    }
}

class Commander {
    private gun: Artillery;

    constructor(gun: Artillery) {
        this.gun = gun;
    }

    shoot(x: number, y: number) {
        this.gun.shoot(x, y);
    }
}
