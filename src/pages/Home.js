import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import linkedInLogo from '../assets/images/linkedInlogo.png';
import spotifyLogo from '../assets/images/spotifylogo.png';
import youtubeLogo from '../assets/images/youtubelogo.png';
import mediumLogo from '../assets/images/mediumlogo.png';
import web3storiesLogo from '../assets/images/web3stories.png';
import aboutmeLogo from '../assets/images/aboutmelogo.png';
import Cube from 'react-3d-cube';

const Home = () => {
  const navigate = useNavigate();

  // Function to handle navigation on double click
  const handleDoubleClick = (url) => {
    // Check if URL is an internal link
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      navigate(url);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <h1 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '2rem', fontWeight: 700 }}>
        Welcome to the world of Blockchain!
      </h1>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ width: 300, height: 300 }}>
        <Cube size={300} index="front">
          {/* LinkedIn */}
          <div onDoubleClick={() => handleDoubleClick("https://www.linkedin.com/company/web3stories/")}>
            <img src={linkedInLogo} alt="LinkedIn" style={{ width: "100%", height: "100%" }} />
          </div>
          {/* Spotify */}
          <div onDoubleClick={() => handleDoubleClick("https://podcasters.spotify.com/pod/show/marcel685")}>
            <img src={spotifyLogo} alt="Spotify" style={{ width: "100%", height: "100%" }} />
          </div>
          {/* YouTube */}
          <div onDoubleClick={() => handleDoubleClick("https://www.youtube.com/@web3stories/videos")}>
            <img src={youtubeLogo} alt="YouTube" style={{ width: "100%", height: "100%" }} />
          </div>
          {/* Medium */}
          <div onDoubleClick={() => handleDoubleClick("https://medium.com/@web3stories")}>
            <img src={mediumLogo} alt="Medium" style={{ width: "100%", height: "100%" }} />
          </div>
          {/* Web3stories */}
          <div onDoubleClick={() => handleDoubleClick("/web3stories")}>
            <img src={web3storiesLogo} alt="web3stories" style={{ width: "100%", height: "100%" }} />
          </div>
          {/* About Me */}
          <div onDoubleClick={() => handleDoubleClick("https://www.linkedin.com/in/%F0%9F%91%A8%E2%80%8D%F0%9F%9A%80marcel-grimm-843b68201/")}>
            <img src={aboutmeLogo} alt="About Me" style={{ width: "100%", height: "100%" }} />
          </div>
        </Cube>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h2 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.5rem', fontWeight: 700 }}>
        Unlock the Blockchain Universe: Double-Click the Cube Faces to Explore Beyond!
      </h2>
    </div>
  );
};

export default Home;
