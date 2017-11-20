// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// Reading Ref:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
//
//note: 
//Boolean, Number and String are converted to the corresponding primitive values during stringification
// 'undefined', a function, a symbol is omitted or censored to null(when found in an array)
// when pure values like 'function' and 'undefined' are passed, JSON.stringify return undefined.
//Input: obj
//ouput: a string version
// Implementation:
	// check for all conditions and return proper values
	// check whether obj is an array
		//if yes, check for symbols 
	// else if obj is typeof obj, return proper string omitting symbols, function.

// function typeOf(obj) { // repeated section in the code
// 	return typeof obj;
// }

var stringifyJSON = function(obj) {
  // your code goes here
  switch (true) {
  	case typeof obj === 'string':
  	return '"' + obj + '"';

  	case typeof obj === 'number':
  	  return (isFinite(obj) ? obj.toString() : 'null');

  	case obj === null:
  	  return 'null';

  	case typeof (obj === 'undefined' || obj === 'function' || obj === 'symbol'):
  	  return undefined;

  	case typeof obj === 'boolean':
  	  return obj.toString();

  	case Array.isArray(obj):
  	  var str = [];
  	  for(var i = 0; i < obj.length; i += 1) {
  		str.push(stringifyJSON(obj[i]));
  	  }
  	  return '[' + str + ']';

  	case toString.call(obj) === '[object Object]':
  	  var str = [];
  	  for(var key in obj) {
  	  	if (typeof obj[key] === 'function') {
  	  		return '{}';
  	  	} else if(hasOwnProperty.call(obj, key)) {
  	  	  str.push('"' + key + '":' + stringifyJSON(obj[key]));
  	  	}
  	  }
  	  return '{' + str.join(',') + '}';
  }
};
