import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'; // Import the new Navbar component
import Card from './Card';
import Footer from './Footer';
import Feedback from './Feedback';

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "9c3ed8ee95884dec979460a60f96675b";

    // Function to fetch data from the News API
    const getData = async (query) => {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
            const jsonData = await response.json();
            if (jsonData.articles) {
                const articles = jsonData.articles.slice(0, 10);
                setNewsData(articles);
            } else {
                console.error("No articles found.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Function to handle category button clicks
    const handleCategoryClick = (event) => {
        const category = event.target.value; // Get the button's value
        setSearch(category); // Update the search term
        getData(category); // Fetch data based on the selected category
    };

    // Function to handle search input changes
    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    // Function to handle manual search button click
    const handleSearch = () => {
        getData(search);
    };

    // Fetch initial data on component mount
    useEffect(() => {
        getData(search);
    }, []);

    return (
        <>
        <div className="newsapp">
            {/* Use Navbar */}
            <Navbar search={search} handleInput={handleInput} handleSearch={handleSearch} />

            <div className="hero">
                <p className="headline">Stay connected with Newsnex for updates on trendy news.</p>
            </div>

            <div className="categoryBtn">
                <button onClick={handleCategoryClick} value="sports">Sports</button>
                <button onClick={handleCategoryClick} value="politics">Politics</button>
                <button onClick={handleCategoryClick} value="entertainment">Entertainment</button>
                <button onClick={handleCategoryClick} value="health">Health</button>
                <button onClick={handleCategoryClick} value="fitness">Fitness</button>
            </div>

            <div className="news-cards">
                {newsData ? (
                    <Card data={newsData} />
                ) : (
                    <p>Loading news...</p>
                )}
            </div>
            <br/>
        </div>
        <Footer/>
        </>
        
    );
};

export default Newsapp;
