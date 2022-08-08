import React, { useState, useEffect } from "react";
import "./notFound.css"

// const numImagesAvailable = 10;
// const imageWidth = "500px";
// const imageHeight = "500px";
// const collectionID = "kj18-xEoTvo";
  
function NotFound () {

  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(()=>{
    
    // const randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
    // console.log(collectionID);
    // fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomImageIndex}`).then(data => {
    //   // setBackgroundImage(data.url);
    //   console.log(data.url);
    // })
    fetch(`https://source.unsplash.com/ZRqUi_w8yxw`).then(data => {
      setBackgroundImage(data.url);
    })
  }, []);

  return (
    <main id="404" style={{ 
      // backgroundImage: `url(${backgroundImage})` ,
      // backgroundRepeat: "no-repeat",
      background: `url(${backgroundImage})` ,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: "center",
      backgroundSize: "contain",
    }}>
      <p>404 Not Found<br />お探しのページは見つかりませんでした</p>
    </main>
  )
}

export default NotFound