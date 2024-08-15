import React from "react";
import { Spotlight } from "../ui/Spotlight";

function Lights() {
	return (
		<div className="relative sm:opacity-100 opacity-50">
			<Spotlight
				className="absolute top-0 -left-30 md:-left-32 md:-top-20 h-[40vh] md:h-screen "
				fill="purple"
			/>
			<Spotlight
				className="absolute top-0 -left-30 md:-left-32 md:-top-20 h-[40vh] md:h-screen "
				style={{ transform: "scaleX(-1)" }}
				fill="blue"
			/>

			{/* <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" /> */}
			{/* <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" /> */}
		</div>
	);
}

export default Lights;
