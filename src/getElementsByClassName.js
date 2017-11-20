// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// your code here:

//Reading Ref:
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
//https://developer.mozilla.org/en-US/docs/Web/API/NodeList
//https://developer.mozilla.org/en-US/docs/Web/API/Element
//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
//https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList

  // returns an array-like object of all child elements which 
  		//have all of the given class names. 
  // can call on the whole document object - return elements which are descendants of the spec. doc root element 
                                              //with the given className.
  // can call on any element - returns a live HTML collection containing all child elements with given className

  //note: 
  			//1) class names(more than a class) are separated by whitespace (
             	// account for this using a split over an empty string
             	// check for existence using indexOf
             	// or use element.classList
         	//2) if class attr was not set, elementClasses.length returns 0.

  //search the document object including root node
  //Document- head==>body-->element(parent)- ->element(children)

  //input: a string of word or words separated by whitespace e.g ('test') or ('red test')
  // output: an array of all elements with the given className e.g ()
  //search through body object
  //look for the property element within parentNodes(NodeList)
  // check whether the key-pair value match with className
  		// find any match, push inside new array
  //search within childnodes
  	//repeat same procedure(recursive function)

var getElementsByClassName = function(className) {
	
  var elements = []; // array to collect elements found after search

  function getElements (element) {
    if (element.classList !== undefined) { // check if class attribute was set
  	  if (element.classList.contains(className)) { //if yes, check whether classname exists as class
  	    elements.push(element);
  	  }
  	  	//iterate through children and send each child for check of className
  	  for (var i = 0; i < element.childNodes.length; i++) { 
  		  getElements(element.childNodes[i]);
  	  }
    }

  	return element;
  }
  
  getElements(document.body); 

  return elements;
};


