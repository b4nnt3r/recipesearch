
  fetch(
    "http://www.recipepuppy.com/api/?q=search-term"
  )
    .then(function(response) {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        let template = `
        <div class="title">
        <header>
        <h1>${results.title}</h1>
        </header>
        </div>
        <article>
          <div class="me">

          </div>
        </article>
        `;
        document.querySelector('.cont').innerHTML += template;
      });


    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
