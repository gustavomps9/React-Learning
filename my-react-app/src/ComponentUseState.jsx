import React, {useState, useEffect} from "react";

function ComponentUseState() {

   const [width, setWidth] = useState(window.innerWidth);
   const [height, setHeight] = useState(window.innerHeight);
   

   useEffect(() => {
      window.addEventListener("resize", handleResize);
      console.log("Componente renderizado");

      return () => {
         window.removeEventListener("resize", handleResize);
         console.log("Componente desmontado");
      }
   },[]);
      

   function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
   }

   return(
      <>
         <p>Window width: {width}px</p>
         <p>Window height: {height}px</p>
      </>
   );

}

export default ComponentUseState;