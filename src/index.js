import "./less/index.less";

// Your code goes here!

//load
window.onload = function (evt) {
  console.log(`event ${evt.type} fired! Ready to go!`);
  const heading = document.querySelector("h1");
  heading.textContent = "READY TO GO!!";

  //copy
  window.addEventListener("copy", () => {
    navigator.clipboard.readText().then((text) => {
      heading.textContent += text;
    });
  });
};
