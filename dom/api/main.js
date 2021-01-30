function selectingElements() {
  /**
   * selecting elements - you can use css selectors in function argument
   */
  const p = document.querySelector("p");
  const divs = document.querySelectorAll("div");
  console.log(p);
  console.log(divs);
}

function elementPropertiesMethods() {
  /**
   * element properties and methods
   */
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

function workingWithClasses() {
  /**
   * working with classes
   */
  const myImage = document.querySelector(".myImage");

  // classList API to remove and add classes
  myImage.classList.add("clickable");
  // myImage.classList.remove("clickable")
  console.log(myImage.className);
  console.log(myImage.classList.contains("clickable"));

  // replace class "foo" with class "bar"
  // div.classList.replace("foo", "bar");

  function toggleRound() {
    // if "round" is set remove it, otherwise add it
    myImage.classList.toggle("round");
  }

  myImage.addEventListener("click", toggleRound);
}

function builtInAndCustomAttributes() {
  /**
   * Build in and Custom data attributes
   */
  const myImage = document.querySelector(".myImage");

  // myImage.width = 100

  myImage.alt = "random img"; // setter
  console.log(myImage.alt); // getter

  // naturalWidth - only available after image is loaded
  myImage.addEventListener("load", () => {
    console.log(myImage.naturalWidth);
  });

  // custom data attributes
  myImage.setAttribute("data-name", "I am Ankur");
  console.log(myImage.getAttribute("data-name"));
  console.log(myImage.hasAttribute("data-name"));

  myImage.setAttribute("data-age", "25");

  console.log(myImage.dataset);
}

function creatingHTML() {
  /**
   * Creating HTML using JS
   */
  const myDiv = document.createElement("div");
  myDiv.classList.add("lightblue-bg");
  console.log(myDiv);

  const myPara = document.createElement("p");
  myPara.innerText = "This paragraph is created using JS.";
  console.log(myPara);

  const myImage = document.createElement("img");
  myImage.src = "https://source.unsplash.com/random/400x400";
  myImage.alt = "unsplash random img";
  console.log(myImage);

  myDiv.appendChild(myPara);
  myDiv.appendChild(myImage);
  console.log(myDiv);

  document.body.appendChild(myDiv);
}

window.addEventListener("DOMContentLoaded", creatingHTML);
