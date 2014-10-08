# Fus 2.0

POO base.

Inline class creation and inheritance.

Add `.clone()` method if you don't create it

### Example

```js
var Entity = fus(function(life)
{
	// Class constructor
	this.life = life; // Create attributes
	this.alive = true;
}, {
	// Methods
	damage: function(dmg)
	{
		this.life -= dmg; // Access to class attributes
		if (this.life <= 0)
			this.die(); // Call an other method
	},
	die: function()
	{
		this.life = 0;
		this.alive = false;
	}
});

var e = new Entity(10); // Create an instance
e.damage(845); // Call a method
console.log(e.alive); // false

var Player = fus(function(name)
{
	Player.super(this)(10); // Call super constructor
	this.name = name;
}, {
	sayLife: function()
	{
		// Access attribute 'life' from super class
		console.log(this.name + " has " + this.life + " life points");
	},
	die: function() // Override a method
	{
		console.log(this.name + " is dead");
		Player.super(this, "die")(); // Call super class method
	}
}, Entity); // extends Entity

var p = new Player("tom");
p.sayLife(); // "tom has 10 life points"
p.die(); // "tom is dead"
console.log(p.alive); // false
```

### Reference

*	`fus(constructor, prototypes, superClass)`
	> Create a class
	> superClass is optionnal
	> Add `.clone()` method to the class (except if you add it or if parent have it)

*	fus`.extendClass(childClass, superClass)`
	> Extend a class
	> Function used by `fus`
	> Not helpful, use `fus` instead

*	fus`.clone(obj)`
	> Clone `obj`
	> Doesn't copy recursively
	> For Class created with `fus` use `obj.clone()` instead
