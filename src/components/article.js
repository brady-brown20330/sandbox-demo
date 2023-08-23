function Article(props) {
  console.log('props in the article: ', props.article)

// get this to return the article title 
// so you know the title is matched with a route. 
return (
  <div>
    <div className='banner'>
      <img className='banner-img' src={props.article.featured_image.url} />
      <h1 className='banner-text'>{props.article.title}</h1>
    </div>
    <div className='container-md'
      dangerouslySetInnerHTML={{
        __html: props.article.rich_text_editor
      }}
    ></div>
  </div>
 
)


}

export default Article;