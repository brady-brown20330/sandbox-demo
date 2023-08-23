function ArticleList(props) {
console.log('props in articles list: ', props)

if (!props.articles[0]) {
  return <h1>Loading</h1>
}

return (
  <div className="container text-center">
      <div className="row row-cols-2">
        {props.articles.map((article) => {
          return (
            <div className="card" key={article.uid} style={{'width':'18rem','margin':'2vw'}}>
            <img src={article.featured_image.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text truncated">{article.summary}</p>
                <a href={article.url} className="btn btn-primary">Read On</a>
              </div>
            </div>
          )
        })}
      </div>
  </div>
)  
}

export default ArticleList;
