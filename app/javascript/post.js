function post(){
  const newArticle = document.getElementById("new_article");
  newArticle.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(newArticle);
  });
};

window.addEventListener("load", post);