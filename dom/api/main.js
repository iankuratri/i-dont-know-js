function init() {
  // selecting elements - you can use css selectors in function argument
  const p = document.querySelector("p");
  const divs = document.querySelectorAll("div");
  console.log(p);
  console.log(divs);

  // element properties and methods
  const myFirstHeading = document.querySelector("#myFirstHeading");
  console.dir(myFirstHeading);

  // represents the text content of the node and its descendants.
  console.log(myFirstHeading.textContent);

  // represents the "rendered" text content of a node and its descendants.
  // As a getter, it approximates the text the user would get if they highlighted
  // the contents of the element with the cursor and then copied it to the clipboard.
  console.log(myFirstHeading.innerText);

  // innerHTML gets or sets the HTML or XML markup contained within the element.
  console.log(myFirstHeading.innerHTML);

  // outerHTML attribute of the Element DOM interface gets the serialized
  // HTML fragment describing the element including its descendants.
  console.log(myFirstHeading.outerHTML);

  // document.createElement() method creates the HTML element specified by tagName
  const afterHeadingEl = document.createElement("h1");
  afterHeadingEl.innerText = "I am after Heading.";

  const beforeHeadingEl = document.createElement("h1");
  beforeHeadingEl.innerText = "I am before Heading.";

  // The ChildNode.after() and ChildNode.before() method inserts a set of Node or
  // DOMString objects in the children list of this ChildNode's parent, just after and before this ChildNode.
  myFirstHeading.after(afterHeadingEl);
  myFirstHeading.before(beforeHeadingEl);
}

window.addEventListener("DOMContentLoaded", init);
