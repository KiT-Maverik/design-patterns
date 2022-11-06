Factory creates similar objects using data provided.

When to use?
When you need to create lots of objects of the same structure, but different values.

the most common use simplify complex constructor

```js
class Character {
    constructor (strength, charisma, intellect) {
        this.strength = strength;
        this.charisma = charisma;
        this.intellect = intellect;
    }
}

class CharacterFactory {
    create(character) {
        switch (character) {
            case 'male': return new Character(10, 5, 8);
            case 'female':  return new Character(6, 10, 9);
        }
    }
}
```
