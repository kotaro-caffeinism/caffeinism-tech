import React, { useState, useEffect } from "react";

function Teapot() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(()=>{
    fetch(`https://source.unsplash.com/6lIVr77uihU`).then(data => {
      setBackgroundImage(data.url);
    })
  }, []);

  return (
    <main id="teapot" style={{ 
      // backgroundImage: `url(${backgroundImage})` ,
      // backgroundRepeat: "no-repeat",
      background: `url(${backgroundImage})` ,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: "center",
      backgroundSize: "contain"
    }}>
      <p>418 I'm a teapot<br />コーヒーは淹れられません</p>
    </main>
  )
}

export default Teapot;