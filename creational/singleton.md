Singleton guarantees that class has only one instance.

# JS-flavored way to create singleton
```js
const test = {
  key: 'value',  
};
```
Everytime you create an object using literal, you'll get singleton, coz in JS each created object has unique link.

# Classic way to create singleton
```js
class Singleton {
    constructor() {
        // If instance already exists, return it
        if (typeof Singleton.instance === 'object') return Singleton.instance;
        
        // Otherwise create new instance 
        Singleton.instance = this;
        return this;
    }
}

// Therefore, every single object created via Singleton constructor will be singleton.
```
