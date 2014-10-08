/**
 * Fus 2
 */

var fus = (function(pr, own){

function clone()
{
	var newObj = new this.constructor(), key;
	for (key in this)
		if (this[own](key))
			newObj[key] = this[key];
	return newObj;
}

function extend(klass, parent)
{
	klass.super = function(self, method)
	{
		return function()
		{
			(method && parent[pr][method] || parent).apply(self, arguments);
		};
	};
	for(var method in parent[pr])
		if (parent[pr][own](method) && !klass[pr][own](method))
			klass[pr][method] = parent[pr][method];
	klass[pr].constructor = klass;
}

function fus2(construct, proto, parent)
{
	construct[pr].clone = clone;
	for (var method in proto)
		if (proto[own](method))
			construct[pr][method] = proto[method];
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

})("prototype", "hasOwnProperty");
