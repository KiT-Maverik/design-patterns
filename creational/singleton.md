Singleton guarantees that class has only one instance, and it has global access point.

> Becomes a factory if used with parameters

# JS-flavored way to create singleton
```js
const test = {
  key: 'value',  
};
```
Everytime you create an object using literal, you'll get singleton, coz in JS each created object has unique link.

# Classic way to create singleton
```js
class FancyClass {
    constructor() {
        // If instance already exists, return it
        if (typeof FancyClass.instance === 'object') return FancyClass.instance;
        
        // Otherwise create new instance 
        FancyClass.instance = this;
        return this;
    }
}

// Therefore, every single object created via FancyClass constructor will be singleton.
```
### PROS & CONS
* Pros
  * Neat way to handle access to shared resources
  * Easy to implement
  * Guarantees 1 instance
  * Solves a well-defined problem
* Cons
  * Sometimes abused
  * Used with parameters and confused with factory
  * Hard to write unit tests
