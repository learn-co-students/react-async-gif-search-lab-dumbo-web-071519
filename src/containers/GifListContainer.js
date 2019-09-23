import React, {Component, Fragment} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

  componentDidMount(){
    this.addGifs()
  }

  addGifs = (query = "dolphins") => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(resp=>resp.json())
    .then(data => {
      this.setState({
        gifs: data.data
      })
    })
  }

  render(){
    return (
      <Fragment>
        <GifSearch searchApi={this.addGifs}/>
        <GifList gifs={this.state.gifs}/>
      </Fragment>
    )
  }

}
