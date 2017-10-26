import React, { Component } from 'react';
import './Searchbar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.inputSearch = this.inputSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    inputSearch(e) {
        this.setState({
            term: e.target.value
        });
    }
    handleSearch(e) {
        this.props.onSearch(this.state.term);
        e.preventDefault();
    }

    render() {
        return (
            <div className="row">
               
                    <input type="text" onChange={this.inputSearch} className="input_searchbar" id="inlineFormInput" placeholder="Enter search term" />

                    <button onClick={this.handleSearch} className="button_searchbar ">Submit</button>

            </div>
        )
    }
}
export default SearchBar;