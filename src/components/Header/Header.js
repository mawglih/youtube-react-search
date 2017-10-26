import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <div>
                <div className="row header_youtube">
                    <h1 className="text-center">Search Youtube Videos with React</h1>
                </div>
            </div>
        )
    }
}
export default Header;