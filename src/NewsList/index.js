import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const NewsList = (props) => {
    // const items = [{
    //     src:'',
    //     altText:'',
    //     caption: '',
    //     header:''
    // }]

    const newsList = props.news.articles.map((oneNews, i) => {
        return (
          
            // {
            //     src:`data:${oneNews.content}`,
            //     altText:oneNews.author,
            //     caption:oneNews.content,
            //     header:oneNews.title
            //  }

            <li key={i}>
            <h1>Title: {oneNews.title}</h1>
            <h2>Author: {oneNews.author}</h2>
            <p>{oneNews.content}</p>
            <h3>{oneNews.publishedAt}</h3><br/>
            </li>
        )
    });


    return (
        <div>
            <h1>Headlines: </h1>
            <ul>
                {/* <UncontrolledCarousel items={newsList} />; */}
                 {newsList}
            </ul>
        </div>
    )
}

export default NewsList;