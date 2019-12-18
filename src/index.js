import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';


// COMPONENTS
import Header from './Components/header';
import NewList from './Components/news_list';
import NewsItem from './Components/news_list_item.js';



class App extends Component {

    state = {
        news: JSON
    }

    render(){
        return (
            <div>
                <Header/>
                <NewList news= {this.state.news}>
                    new work
                </NewList>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));
