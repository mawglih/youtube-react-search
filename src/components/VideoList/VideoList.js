import React, { Component } from 'react';
import VideoItem from '../VideoItem/VideoItem';
class VideoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>

                {
                    this.props.videos.map((video) => {
                        console.log('videolist: ', video);
                    return <VideoItem video={video} key={video.id}/>;
                })
                }

            </div>
        );
    }
};
export default VideoList;
{/* <VideoItem video={this.props.video.map(item => {
                    return {
                        title: item.snippet.title,
                        url: item.snippet.thumbnails.default.url,
                        description: item.snippet.description,
                        id: item.etag
                    }
                })}/> */}