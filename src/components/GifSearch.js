import React, {Component} from 'react'

export default class GifSearch extends Component{

  state = {
    search: null
  }

  update= (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.searchApi(this.state.search)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <h3>Search for a Gif</h3>
      Search:
      <input name="search" onChange={this.update} value={this.state.search}/>
      <input type="submit" value="Submit" />
      </form>
    )
  }

}
