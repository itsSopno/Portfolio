import React from "react";
import { Link } from "react-router-dom";
const Project = () => {
  return (
   <section className="bg-[#fffff] h-screen w-full">
        <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-6xl font-bold mb-4">Projects Page</h1>
            <p className="text-lg mb-8">Explore my projects and works.</p>
            <Link to="/" className="text-blue-500 underline">Go Back Home</Link>
        </div>
   </section>
  );
}
export default Project;