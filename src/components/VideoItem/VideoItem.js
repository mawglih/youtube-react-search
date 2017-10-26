import React, { Component } from 'react';

class VideoItem extends Component {
    constructor(props) {
        super(props);
        this.onVideoSelect = this.onVideoSelect.bind(this);
    }
    onVideoSelect() {
        
    }
    render() {
        return(
            <div>
                <div onClick={this.onVideoSelect}>
                <div className="video-list media">
                <img className="align-self-start mr-3" src={this.props.video.url} alt={this.props.video.title} />
                <div className="media-body">
                    <h5 className="mt-0">{this.props.video.title}</h5>
                    <p>{this.props.video.description}</p>
                    
                </div>
                </div>
                </div>
            </div>
        )
    }
}
export default VideoItem;