import React, { useState, useEffect } from 'react';
import axios from 'axios';
import New from './New';
import config from '../../env.json';

import classes from './News.module.css';

const Categories = ["business","entertainment","general","health","science","sports","technology"];
const randomCategory = Categories[Math.floor(Math.random() * Categories.length)];

const News = () => {

    const [news, setNews] = useState([]);
    const API_KEY = config.NEWS_API_KEY;

    useEffect(() => {
        const fetchNews = async () => {
            await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${randomCategory}&apiKey=${API_KEY}`)
                .then((data) => {   
                    setNews(data.data.articles);    
                })
        }
        fetchNews().catch((err) => {
            console.log("couldn't fetch news");
            console.log(err);
          });
    }, []);

    return (
        <div>
            <ul className={classes.news}>
                {news.map((newItem, index) => (
                    <New key={index} item={newItem} />
                ))}
            </ul>
        </div>
    );
}

export default News;