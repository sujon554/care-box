import  { useState, useEffect } from "react";
import ReactHlsPlayer from "react-hls-player";
import './Video.css'


const Video = () => {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState("");
  useEffect(() => {
    fetch(
      "https://care-box-backend.herokuapp.com/api/v1/applicant_test/get_video_link/"
    )
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  const handleClick = (link) => {
    setCurrentVideo(link);
  };

  


  
  return (
    <div className="container">
     
      <div>
        <ReactHlsPlayer
          src={currentVideo}
          autoPlay={false}
          controls={true}
          width="450px"
          height="auto"
        
        />
        
      </div>

      <div>
        {videos.map((video) => (
          <button key={video.id} onClick={() => handleClick(video.link)}>
            Video Strming {video.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Video;
