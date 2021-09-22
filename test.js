const addForm = document.querySelector("#addForm");
console.log(addForm);
console.log("test.js");

// Add an 'onsubmit' event listener
addForm.addEventListener("submit", (event) => {
    // Prevent default action
    event.preventDefault();
    alert("invalidation");
  });
  