import React, {useState, useEffect} from 'react'
import './App.css';
import Stack from './sdk/csData';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Homepage from './components/homepage';
import Nav from './components/nav';
import Article from './components/article';
import ArticleList from './components/articleList';

function App() {

// a state to save data in
const [home, setHome] = useState({})
const [articles, setArticles] = useState({})

let articleRoutes
if(isEmpty(articles) == false) {
  articleRoutes = articles
}


function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
}



// calls to get data that will be saved in state
async function getHomepage() {
  let theHomepage = await Stack.getSingleEntry('homepage', 'blt0beb7d716b3e5458', 'en-us')
  setHome(theHomepage)
  // console.log('homepage in state: ', home)
}

async function getArticles() {
  let articlesList = await Stack.getEntries('article', 'en-us')
  setArticles(articlesList[0])
  // console.log('articles in state: ', articles)
}

useEffect(() => {
  getHomepage()
  getArticles()
}, [])

  return (
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route 
            exact path='/'
            element={<Homepage home={home}/>}
            />
            <Route 
            path='/articles/'
            element={<ArticleList articles={articles}/>}
            />
            {
                articleRoutes?.map((article) => {
                return <Route path={article.url} key={article.uid} element={<Article article={article}/>}/>
              })
                    
            }
          </Routes>
        </div>
      </Router>
  );
}

export default App;
