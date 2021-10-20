console.log("hey");
// ab8d9b00779642a3b682931b7cf1622d
let country = 'in';
let apiKey = 'ab8d9b00779642a3b682931b7cf1622d'
let news = document.getElementById('news');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);


xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);

    let newsHtml = "";
    articles.forEach(function (element,index) {
// console.log(element,index)
      let Todaynews = `
<p>
<div id="news" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">${element["title"]}</div>

</p>
<div class="row">
<div class="col">
  <div class="collapse collapse show" id="multiCollapseExample1">
    <div class="card card-body">
      ${element["content"]} .<a href="${element['url']}" target="_blank"> Read more here</a>
    </div>
  </div>
</div>
  
</div>`
      newsHtml += Todaynews;
    });
    news.innerHTML = newsHtml;
  }
  else {
    console.log("some error occured");
  }
}

xhr.send()



