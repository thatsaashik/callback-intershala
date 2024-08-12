const btn = document.querySelector("#Btn").addEventListener("click", () => {
  setTimeout(function() {
    //-----------------------------------update output----------------------------------------------------------------
    document.getElementById("output").innerText = " executed after 5 seconds";
    // ------------------------------------fetch Data--------------------------------------------------------------------
    fetch("https://dummyjson.com/posts").then(res => res.json()).then(data => {
      document.getElementById("output").innerHTML = data.posts
        .map(post => `<div>${post.title}</div>`)
        .join("");
    });
  }, 5000);
});
