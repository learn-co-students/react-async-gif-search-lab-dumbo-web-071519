import React, { Component } from 'react';

export default class GifList extends Component{
    
    getGifList(){
        return this.props.gifs.map(
            gif => {
                return <li><img src={gif.images.original.url}/></li>
            }
        )
    }
    
    render(){
        return(
            <ul>
                {this.getGifList()}
            </ul>
        )
    }
}