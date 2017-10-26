import React, { Component } from 'react';
import VideoItem from '../VideoItem/VideoItem';

class VideoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <ul className="list-group">
                { this.props.videos.map((video) => {
                        console.log('videolist: ', video);
                    return <VideoItem onVideoSelect={this.props.onVideoSelect} video={video} key={video.id}/>;
                })
                }
                </ul>

            </div>
        );
    }
};
export default VideoList;