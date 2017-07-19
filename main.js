let container = document.querySelector('.container');
let input = document.querySelector('#input');
let button = document.querySelector('.button')


button.addEventListener("click", function click() {

  fetch(
      "https://crossorigin.me/http://www.recipepuppy.com/api/?q=" + input.value
    )
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(response) {
          let template = '';
          response.results.forEach(function(result) {
            template += `
          <div class="results">
            <img src="${result.thumbnail}" onerror="this.src='http://hakkaking.com/img/default_food.png'">
            <h3><a href="${result.href}" target="blank">${result.title}</a></h3>
          </div>
      `;
            container.innerHTML = template
          });
        })
        .catch(function(err) {
          console.log("Fetch Error :-S", err);
        });
    });
});
