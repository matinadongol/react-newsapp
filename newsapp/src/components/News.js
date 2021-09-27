import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading: false
        }
    }

    async componentDidMount(){
        //console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33247fd80a4b4b4193905721c2a23309";
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData);
        this.setState({articles: parsedData.articles});
    }
    render() {
        return (
            <div className="container my-5">
                <h1>NewsMonkey - Top Headlines</h1>
                <div className="row mt-4">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key = {element.url}> 
                        <NewsItem title = {element.title?element.title.slice(0,45) : ""} description = {element.description?element.description.slice(0,88): ""} imageUrl= {element.urlToImage} newsUrl = {element.url}/>
                    </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
