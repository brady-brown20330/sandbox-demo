function Homepage(props) {

  // console.log('props in the homepage: ', props.home.content)

  if (props.home.content) {
    return props.home.content.map((block, i) => {
      if (block.cta) {
        return (
          <div className='App' key={'block#' + i}>
            <div className="d-grid gap-2 d-md-block">
              <p>{block.cta.title}</p>
              <button className="btn btn-primary" type="button">{block.cta.button.button_title}</button>
            </div>
          </div>
        )
      }
      if (block.images_and_text) {
        return (
          <div>
            <img src={block.images_and_text.images[0].url} style={{'maxWidth':'30vw'}} className="img-thumbnail" alt="..." key={'block#' + i}></img>

          </div>
        )
      }
    })
  }

  return (
    <h1>Loading...</h1>
  )

}

export default Homepage;