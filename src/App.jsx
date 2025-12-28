import { Outlet } from "react-router-dom";

import RekorderNavbar from "./Component/Navbar/Nav";
import CustomTriangleCursor from "./CustomTriangleCursor";
import { useEffect, useState } from "react";
import Footer from "./Component/footer/footer";

function App() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      }
    };
    checkTouch();
  }, []);

  return (
    <div>
      {!isTouchDevice && <CustomTriangleCursor />}
      
      <RekorderNavbar />
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
