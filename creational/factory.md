Factory creates objects of the same structure, but with different implementation.

### When to use?
When you need to create lots of objects of the same structure, but with different values.
The most common use case is simplifying complex constructors.

### Production line
Production line may produce one or more classes.
> Note: All objects produced by factory must share the same interface.

### PROS & CONS
* Pros
    * Guarantees abstraction
    * Code is flexible and adaptable
    * Useful for frameworks and libraries
* Cons
    * Complex code
    * Takes time to set the base
    * Not a pattern that can be refactored into

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
