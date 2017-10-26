import React from 'react';
import './VideoDetail.css';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div><h2>Loading...</h2></div>;
    }
    const videoId = video.id;
    const url = `https:/www.youtube.com/embed/${videoId}`;

        return(
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    {<iframe className="embed-responsive-item" src={url} title={video.id}></iframe>}
                </div>
                <div className="details">
                    <h2>{video.title}</h2>
                    <div>{video.description}</div>
                </div>
                <hr />
            </div>
        );
    };

export default VideoDetail;