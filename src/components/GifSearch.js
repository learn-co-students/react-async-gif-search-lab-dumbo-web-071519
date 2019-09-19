import React, { Component } from 'react';

export default class GifSearch extends Component {

    state = {
        query: ""
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        return (
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state.query)}>
                <input type="text" name="query" value={this.state.query} onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}