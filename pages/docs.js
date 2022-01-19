import React, { useRef } from "react";

export default function Docs() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className="docs">
       <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            background="transparent"  speed="1"  style="width: 300px; height: 300px;" 
            src="https://assets6.lottiefiles.com/packages/lf20_hjnzpe2w.json"
            style={{ hieght: '200px', width: '200px' }}
          ></lottie-player>    
          <h1>Welcome to the docs</h1>
          <p>This page is under construction</p>
          
    </div>
  );
}

