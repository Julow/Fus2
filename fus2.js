/**
 * Fus 2
 */

var fus = (function(){

function clone()
{
	var newObj = new this.constructor(), key;
	for (key in this)
	{
		if (this.hasOwnProperty(key))
			newObj[key] = this[key];
	}
	return newObj;
}

function extend(klass, parent)
{
	klass.super = function(self, method)
	{
		return function()
		{
			(method && parent.prototype[method] || parent).apply(self, arguments);
		};
	};
	for(var method in parent.prototype)
	{
		if (parent.prototype.hasOwnProperty(method) && !klass.prototype.hasOwnProperty(method))
			klass.prototype[method] = parent.prototype[method];
	}
	klass.prototype.constructor = klass;
}

function fus2(construct, proto, parent)
{
	construct.prototype.clone = clone;
	for (var method in proto)
	{
		if (proto.hasOwnProperty(method))
			construct.prototype[method] = proto[method];
	}
	if (parent)
		extend(construct, parent);
	return construct;
}
fus2.clone = function(obj)
{
	return (typeof obj !== "object" || obj == null)? obj : clone.call(obj);
};
fus2.extendClass = extend;

return fus2;

})();
