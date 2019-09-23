import React, {Component} from 'react'

export default class GifList extends Component{
  render(){
    return (
      <ul>
      {this.props.gifs.map(e=><li><img src={e.images.original.url}/></li>)}
      </ul>
    )
  }
}
