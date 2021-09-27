import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props
        return (
            <>
                <div className="card my-2" style={{width: "18rem"}}>
                    <img src={imageUrl ? imageUrl : "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"} className="card-img-top" alt="..." style = {{height: "12rem"}}/>
                        <div className="card-body"style = {{height: "15rem"}}>
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target = "_blank" className="btn btn-primary btn-sm">Read More</a>
                        </div>
                    </div>
            </>
        )
    }
}

export default NewsItem
