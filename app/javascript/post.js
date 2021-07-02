function post(){
  const submit = getElementById("submit_btn")
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("submit_btn")
  });
};

window.addEventListener("load", post);