import React from 'react';
// import { ListGroup, ListGroupItem } from 'reactstrap';
// import { Button } from 'reactstrap';


const NewsList = (props) => {

    const newsList = props.news.articles.map((oneNews, i) => {
        return (
            <li key={i}>
             <h1>{oneNews.title}</h1>
            <h2>{oneNews.author}</h2>
            <p>{oneNews.content}</p>
            <h3>{oneNews.publishedAt}</h3><br/>               
            </li>
        )
    });


    return (
        <div>
            <h1>Headlines: </h1>
            <ul>
                {newsList}
            </ul>
        </div>
    )
}

export default NewsList;