import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <>
                <div className="card my-2" >
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}}>{source}</span>
                    <img src={imageUrl ? imageUrl : "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"} className="card-img-top" alt="..." style={{ height: "15rem" }} />
                    <div className="card-body" style={{ height: "15rem" }}>
                        <h5 className="card-title">
                            {title}...
                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By <strong>{author ? author : "unknown"}</strong> on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
