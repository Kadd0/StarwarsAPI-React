import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

function Intro({ onSkip }) {
  const [audio, setAudio] = useState(null); // Create a state for the audio object
  const [isPlaying, setIsPlaying] = useState(false); // Create a state for the playing status

  useEffect(() => { // Create the audio object when the component is mounted
    setAudio(new Audio("./starwarsmarch.mp3")); // Set the audio object
  }, []);

  const handleToggleAudio = () => { // Create a function to toggle the playing status
    if (isPlaying) { // If the audio is playing, pause it
      audio.pause(); 
      setIsPlaying(false);
    } else { // If the audio is not playing, play it
      audio.play();
      setIsPlaying(true);
    }
  };
  return (
    <div>
      <div>
        <button className="sound" onClick={handleToggleAudio}>
          {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
        </button>
      </div>
      <button className="skip-button" onClick={onSkip}>
        Skip
      </button>
      <div className="intro-container">
        <h1 className="intro-text">
          <Typewriter
            options={{ delay: 50 }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "A long time ago in a galaxy far, far away, there lived a frontend developer named Kadir Kavraz. He was assigned to complete a project by Patika. However, Kadir fell under the influence of the dark side and decided to use the project for evil purposes."
                )
                .pauseFor(1000)
                .deleteAll(true)
                .typeString(
                  "Walking on the dark side, Kadir scared other developers into supporting his projects. After a long time, Kadir became known as a powerful developer and gained not only fear but also respect."
                )
                .pauseFor(1000)
                .deleteAll(true)
                .typeString(
                  "However, this did not last long. Despite his strength, Kadir could not escape the destructive effects of the dark side and eventually met a bad end"
                )
                .pauseFor(1000)
                .deleteAll(true)
                .typeString(
                  "Years later, Kadir's story is still told and taught as a lesson among young developers. Learning from Kadir's mistakes, they are warned not to be tempted by the allure of the dark side."
                )
                .start();
            }}
          />
        </h1>
      </div>
    </div>
  );
}

export default Intro;
