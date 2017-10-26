import React, { Component } from 'react';
import VideoItem from '../VideoItem/VideoItem';
import './VideoList.css';

class VideoList extends Component {

    render() {
        return(
            <div className="col-sm-8 video-list">
                <ul className="list-group">
                { this.props.videos.map((video) => {
                    return <VideoItem onVideoSelect={this.props.onVideoSelect} video={video} key={video.id}/>;
                })
                }
                </ul>

            </div>
        );
    }
};
export default VideoList;