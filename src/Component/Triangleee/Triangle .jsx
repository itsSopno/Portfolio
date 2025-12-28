import { useEffect, useState } from "react";

const NUM_TRIANGLES = 50; // number of triangles
const random = (min, max) => Math.random() * (max - min) + min;

const TriangleBG = () => {
  const [triangles, setTriangles] = useState([]);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < NUM_TRIANGLES; i++) {
      temp.push({
        x: random(0, window.innerWidth),
        y: random(0, window.innerHeight),
        size: random(0.3, 0.8),
      });
    }
    setTriangles(temp);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      {triangles.map((t, i) => (
        <div
          key={i}
          className="absolute w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-white"
          style={{
            left: t.x,
            top: t.y,
            transform: `scale(${t.size})`,
          }}
        />
      ))}
    </div>
  );
};

export default TriangleBG;
