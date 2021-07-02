function post(){
  const submit = document.getElementById("submit_btn");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("submit_btn")
  });
};

window.addEventListener("load", post);