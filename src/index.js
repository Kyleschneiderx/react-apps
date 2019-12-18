import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';


// COMPONENTS
import Header from './Components/header';
import NewList from './Components/news_list';
import NewsItem from './Components/news_list_item.js';



class App extends Component {

    state = {
        news: JSON,
        filtered: []

    }

    getKeyword = (event) => {
        // console.log(event.target.value)
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
        });
        this.setState({
            filtered
        })

        //console.log(filtered)

    }

    render(){

        let newsFiltered = this.state.filtered
        let newsWhole = this.state.news
        return (
            <div>
                <Header keywords = {this.getKeyword} />
                <NewList news= {newsFiltered === 0 ? newsWhole : newsFiltered}>
                    News of the day:
                </NewList>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));
