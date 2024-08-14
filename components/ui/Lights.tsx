"use client";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { useTheme } from "next-themes";

function Lights() {
	const theme = useTheme();
	return (
		<div>
			<Spotlight
				className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
				fill={theme.resolvedTheme === "dark" ? "white" : "purple"}
			/>
			<Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
			<Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
		</div>
	);
}

export default Lights;
