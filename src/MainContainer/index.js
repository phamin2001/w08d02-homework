import React, { Component } from 'react';
import NewsList from '../NewsList';

class MainContainer extends Component {
    constructor() {
        super();

        this.state = {
            news:[],
            loading: true
        }
    }

    getNews = async () => {
        try {
            var url = 'https://newsapi.org/v2/top-headlines?' +
                      'country=us&' +
                      'apiKey=2bfeffca464744d691d5f1b04f3654d8';

            const news = await fetch(url);
            if(!news.ok) {
                throw Error(news.statusText);
            }
            console.log(news, 'just news');
            const newsJson = await news.json();
            console.log(newsJson, 'parsed news');
            return newsJson;
        
        } catch (err) {
            return err;
            console.log(err, 'Error in catch block');
        }
    }

    componentDidMount(){
       this.getNews().then((data) => {
           this.setState({
               news: data, 
               loading: false
           })
       })
    }


    render(){
    
        return (
            <div>
                {this.state.loading ? <span>Data is loading, please wait!!</span> : <NewsList news={this.state.news}/>}
            </div>
        )
    }


}

export default MainContainer;