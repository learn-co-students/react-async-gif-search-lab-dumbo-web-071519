import React, { Component } from 'react';
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component{
    state = {
        gifs: []
    }

    handleSubmit = (event, query) => {
        event.preventDefault();
        event.persist();
        fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(data => {
            const gifs = data.data.slice(0,3)
            this.setState({
                gifs
            })
        })
    }
    
    

    render(){
        return(
            <div className="gif-list-container">
            <GifList gifs={this.state.gifs}/>
            <GifSearch handleSubmit={this.handleSubmit} />
            </div>
        )
    }




}