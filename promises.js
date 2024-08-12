const btn = document.getElementById("Btn").addEventListener("click", () => {
  //---------------------------updating Output Div------------------------------------------------
  let output = document.getElementById("output");
  output.innerText = "Loading...";

  fetchData()
    .then(data => {
      output.innerHTML = data.posts
        .map(post => `<p>${post.title}</p>`)
        .join("");
    })
    .catch(error => {
      output.innerText = error;
    });
});

function fetchData() {
  return new Promise((resolve, reject) => {
    //---------------------------------------timeout for abort----------------------------------------------------
    let timeout = setTimeout(() => {
      reject("Operation time out");
    }, 5000);

    fetch("https://dummyjson.com/posts")
      .then(response => response.json())
      .then(data => {
        clearTimeout(timeout);
        resolve(data);
      })
      .catch(error => reject(error));
  });
}
