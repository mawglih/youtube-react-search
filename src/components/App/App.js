import React, { Component } from 'react';
import './App.css';
import  SearchBar from '../Searchbar/Searchbar';
import VideoList from '../VideoList/VideoList';
import VideoDetail from '../VideoDetail/VideoDetail';
import Youtube from '../../utils/Youtube';
import Header from '../Header/Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.searchYoutube = this.searchYoutube.bind(this);

  }
  
  searchYoutube(term) {
    Youtube.search(term)
    .then(videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }


  render() {
    return (
      <div className="container-fluid">
       <Header />
       <SearchBar onSearch={this.searchYoutube} />
       <VideoDetail video={this.state.selectedVideo} />
       <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}  videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
