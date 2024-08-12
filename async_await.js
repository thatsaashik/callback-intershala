const asyncFuntions = document
  .querySelector("#Btn")
  .addEventListener("click", async () => {
    //--------------------------------------------update-----------------------------
    let output = document.querySelector("#output");
    output.innerText = "Loading...";

    //---------------------------------- after 5 second---------------------------------------------
    let abortcontroller = new AbortController();
    let signals = abortcontroller.signal;

    setTimeout(() => controller.abort(), 5000);

    try {
      //-------------------------------------------fetch Data----------------------------------------------
      let response = await fetch("https://dummyjson.com/posts", { signals });
      let data = await response.json();

      output.innerHTML = data.posts
        .map(post => `<div>${post.title}</div>`)
        .join("");
    } catch (error) {
      if (error.name === "aborterror") {
        output.innerText = " timed out";
      } else {
        output.innerText = "error fetching data";
      }
    }
  });
