import React, { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './News.module.css';

import New from './New';

const API_KEY = "your_api_key";

const Categories = ["business","entertainment","general","health","science","sports","technology"];
const randomCategory = Categories[Math.floor(Math.random() * Categories.length)];

const News = (props) => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            //const foundNews = 
            await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${randomCategory}&apiKey=${API_KEY}`)
                .then((data) => {   
                    const found = data.data;
                    const newsToSet = []
                
                    for (const i in found.articles)
                    {
                        newsToSet.push({ 
                            id: found.articles[i].url,
                            title: found.articles[i].title,
                            author: found.articles[i].author,
                            description: found.articles[i].description,
                            content: found.articles[i].content,
                            url: found.articles[i].url,
                            urlToImage: found.articles[i].urlToImage
                        });
                    };
                    setNews(newsToSet);    
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
                {news.map((newItem) => (
                    <New
                        key={newItem.id}
                        id={newItem.id} 
                        author={newItem.author} 
                        title={newItem.title}
                        description={newItem.description}
                        content={newItem.content}
                        url={newItem.url}
                        urlToImage={newItem.urlToImage}
                    />
                ))}
            </ul>
        </div>
    );
}

export default News;
