function post(){
  const submit = document.getElementById("submit_btn");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(submit);
  });
};

window.addEventListener("load", post);