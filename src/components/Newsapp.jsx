import React, { useEffect, useState } from "react";
import Card from "./Card";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "d9e3db22f0924454850530474f53bf1c";

  const getData = async () => {
    setLoading(true); // Start loading
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
    setLoading(false); // Stop loading
  };

  // Trigger getData whenever `search` changes
  useEffect(() => {
    getData();
  }, [search]); // dependency array ensures data fetches on search change

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-blue-600 p-6 text-white flex items-center justify-between">
        <div className="flex items-center justify-between">
          <h1
            onClick={(e) => setSearch(e.target.value)}
            value="india"
            className="text-2xl font-bold hover:cursor-pointer "
          >
            QuickNews
          </h1>
        </div>
        <div className=" flex items-center space-x-2">
          <input
            onChange={handleInput}
            value={search}
            type="text"
            placeholder="Search News"
            className="p-2 rounded-lg w-2xl border border-zinc-400 max-w-sm"
          />
          {/* <button
            onClick={getData}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            Search
          </button> */}
        </div>
      </nav>

      {/* Category Buttons */}
      <div className="my-4 flex justify-center space-x-4">
        <button
          onClick={userInput}
          value="sports"
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white"
        >
          Sports
        </button>
        <button
          onClick={userInput}
          value="politics"
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white"
        >
          Politics
        </button>
        <button
          onClick={userInput}
          value="entertainment"
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white"
        >
          Entertainment
        </button>
        <button
          onClick={userInput}
          value="health"
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white"
        >
          Health
        </button>
        <button
          onClick={userInput}
          value="fitness"
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white"
        >
          Fitness
        </button>
      </div>

      {loading && (
        <div className="w-[100px] h-[100px] border-8 border-zinc-500 border-t-8 border-t-blue-700 rounded-full animate-spin mx-auto">
          <span className="sr-only">Loading...</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {newsData ? (
          newsData.map((article, index) => <Card key={index} data={article} />)
        ) : (
          <div className="text-center">No news available</div>
        )}
      </div>
    </div>
  );
};

export default Newsapp;
