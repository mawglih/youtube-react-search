import React, { Component } from 'react';

class VideoItem extends Component {
    constructor(props) {
        super(props);
        this.handleVideoSelect = this.handleVideoSelect.bind(this);
    }
    handleVideoSelect() {
        this.props.onVideoSelect(this.props.video);
    }
    render() {
        return(
            <div>
                <li onClick={this.handleVideoSelect} className="list-group-item">
                <div className="video-list media">
                <img className="align-self-start mr-3" src={this.props.video.url} alt={this.props.video.title} />
                <div className="media-body">
                    <h5 className="mt-0">{this.props.video.title}</h5>
                    <p>{this.props.video.description}</p>
                    
                </div>
                </div>
                </li>
            </div>
        )
    }
}
export default VideoItem;