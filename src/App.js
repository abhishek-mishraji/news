import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import NewsList from './Components/NewsList';
import Favorites from './Components/Favorites';
import Header from './Components/Header';
import Pagination from './Components/Pagination';

function App() {
  const [query, setQuery] = useState("bitcoin")
  const [page, setPage] = useState(1)
  const [articles, setArticles] = useState([])
  useEffect(() => {
    FetchArticles(query, page)

  }, [query, page])

  const FetchArticles = async (query, page) => {
    try {

      const endDate = new Date();
      // Get the date one month back
      const startDate = new Date(new Date().setMonth(endDate.getMonth() - 1));

      const formatStartDate = startDate.toISOString().split('T')[0];
      const formatEndDate = endDate.toISOString().split('T')[0];


      // const Response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&from=${formatStartDate}&to=${formatEndDate}&sortBy=popularity&pageSize=10&page=${page}&apiKey=3f0a554942ca4fba9505d04aa21bfbe0`);
      const Response = await axios.get(`https://saurav.tech/NewsAPI/everything/cnn.json`);
      setArticles(Response.data.articles);
      console.log(Response.data.articles);
    } catch (error) {
      console.error("Failed to fetch articles:", error);

    }
  }



  // console.log(query)
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header setQuery={setQuery} />


          <header>
            <nav>
              {/* <NavLink to="/">Home</NavLink> */}
              <br />
              {/* <NavLink to="/Favorites">Favorites</NavLink> */}

            </nav>
          </header>

          <Pagination setPage={setPage} />

          <Routes>
            <Route path="/news" element={
              <>
                <NewsList articles={articles} />
              </>} />

            <Route path="/Favorites" element={<Favorites />} />
          </Routes>
          <Pagination setPage={setPage} />

        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
