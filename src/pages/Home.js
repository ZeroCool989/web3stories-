import React, { Suspense, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber"; // For 3D scene rendering within React
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"; // Enhanced camera controls
import * as THREE from 'three'; // 3D library for JavaScript
import styles from "../assets/css/Home.module.css"; // Styling for the component

// Path to the texture images used for the cube's faces
import linkedInLogo from "../assets/images/linkedInlogo.png";
import spotifyLogo from "../assets/images/spotifylogo.png";
import youtubeLogo from "../assets/images/youtubelogo.png";
import mediumLogo from "../assets/images/mediumlogo.png";
import web3StoriesLogo from "../assets/images/web3stories.png";
import aboutMeLogo from "../assets/images/aboutmelogo.png";

// Represents a single face of the cube
const Plane = ({ position, rotation, texture, onDoubleClick }) => {
  // useMemo ensures the geometry and material are computed once and only recomputed if dependencies change
  const geometry = useMemo(() => new THREE.PlaneGeometry(5, 5), []);
  const material = useMemo(
    () => new THREE.MeshStandardMaterial({ map: texture, side: THREE.DoubleSide }),
    [texture]
  );

  // Mesh combines geometry (shape) and material (appearance) to render a plane
  return (
    <mesh
      position={position}
      rotation={rotation}
      geometry={geometry}
      material={material}
      onDoubleClick={onDoubleClick}
    />
  );
};

// Component to render the interactive cube
const Cube = () => {
  // Loading texture images for each face of the cube
  const textures = useLoader(THREE.TextureLoader, [
    linkedInLogo,
    spotifyLogo,
    youtubeLogo,
    mediumLogo,
    web3StoriesLogo,
    aboutMeLogo,
  ]);

// Function to handle double-click events on each face of the cube
  const handleDoubleClick = (url) => {
    if (url.startsWith("http")) {
      window.open(url, "_blank"); // Opens external links in a new tab
    } else {
      window.location.pathname = url; // Navigates within the app for internal links
    }
  };

 // Grouping all plane components to form a cube
  return (
    <group>
      <Plane position={[0, 0, 2.5]} rotation={[0, 0, 0]} texture={textures[0]} onDoubleClick={() => handleDoubleClick("https://www.linkedin.com/company/web3stories/")} />
      <Plane position={[0, 0, -2.5]} rotation={[0, Math.PI, 0]} texture={textures[1]} onDoubleClick={() => handleDoubleClick("https://podcasters.spotify.com/pod/show/marcel685")} />
      <Plane position={[0, 2.5, 0]} rotation={[-Math.PI / 2, 0, 0]} texture={textures[2]} onDoubleClick={() => handleDoubleClick("https://www.youtube.com/@web3stories")} />
      <Plane position={[0, -2.5, 0]} rotation={[Math.PI / 2, 0, 0]} texture={textures[3]} onDoubleClick={() => handleDoubleClick("https://medium.com/@web3stories")} />
      <Plane position={[2.5, 0, 0]} rotation={[0, Math.PI / 2, 0]} texture={textures[4]} onDoubleClick={() => handleDoubleClick("./web3stories")} />
      <Plane position={[-2.5, 0, 0]} rotation={[0, -Math.PI / 2, 0]} texture={textures[5]} onDoubleClick={() => handleDoubleClick("https://www.linkedin.com/in/%F0%9F%91%A8%E2%80%8D%F0%9F%9A%80marcel-grimm-843b68201/")} />
    </group>
  );
};

// Main App component that renders the 3D cube and sets up the scene
const App = () => {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.headerTitle}>Welcome to the world of Blockchain!</h1>
      <Suspense fallback={<div>Loading...</div>}> {/* Suspense fallback for loading state */}
        <div className={styles.canvasWrapper}>
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} /> {/* Camera setup */}
            <ambientLight intensity={1} /> {/* Basic ambient lighting */}
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} /> {/* Spotlight for dynamic shadows */}
            <pointLight position={[-10, -10, -10]} /> {/* Additional light source */}
            <Cube /> {/* Renders the cube */}
            <OrbitControls /> {/* Camera control to explore the 3D scene */}
          </Canvas>
        </div>
      </Suspense>
      <h2 className={styles.headerSubtitle}>Unlock the Blockchain Universe: Double-Click the Cube Faces to Explore Beyond!</h2>
    </div>
  );
};

export default App;