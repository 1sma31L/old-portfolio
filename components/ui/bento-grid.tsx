"use client";
/* eslint-disable @next/next/no-img-element */
import { cn } from "@/utils/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import GridGlobe from "./GridGlobe";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
				className
			)}>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	img,
	imgClassName,
	titleClassName,
	spareImg,
	id,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
	id?: number;
}) => {
	const leftLists = ["ReactJS", "Next.js", "Typescript"];
	const rightLists = ["Express", "MongoDB", "GraphQL"];
	const [copied, setCopied] = useState(false);
	const defaultOptions = {
		loop: copied,
		autoplay: copied,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	const handleCopy = () => {
		const text = "im.boussekine@gmail.com";
		navigator.clipboard.writeText(text);
		setCopied(true);
	};
	return (
		<div
			className={cn(
				"row-span-1 rounded-3xl overflow-hidden relative group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black-100 dark:border-white/[0.1] border-black-100/[0.05] bg-white border justify-between flex flex-col space-y-4",
				className
			)}>
			<div
				className={`${id === 6 && "flex justify-center items-center"} h-full`}>
				<div className="w-full h-full absolute">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(imgClassName, "object-cover object-center ")}
						/>
					)}
				</div>
				<div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full"} `}>
					{spareImg && (
						<img
							src={spareImg}
							alt={spareImg}
							//   width={220}
							className="object-cover object-center w-full h-full"
						/>
					)}
				</div>
				{id === 6 && (
					// add background animation , remove the p tag
					<BackgroundGradientAnimation>
						{/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
					</BackgroundGradientAnimation>
				)}
				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
					)}>
					<div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm dark:text-[#C1C2D3] text-black-100 z-10">
						{description}
					</div>
					<div
						className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 ${
							id === 1 || id === 6 ? "text-white" : ""
						}`}>
						{title}
					</div>
					{/* for the github 3d globe */}
					{id === 2 && <GridGlobe />}
					{id === 3 && (
						<div className="flex gap-1 lg:gap-3 w-fit absolute -right-3 lg:-right-2">
							{/* tech stack lists */}
							<div className="flex flex-col gap-4 md:gap-3">
								{leftLists.map((item, i) => (
									<span
										key={i}
										className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-80 rounded-lg text-center dark:bg-[#10132E] bg-[#fbf5ff]">
										{item}
									</span>
								))}
								<span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center dark:bg-[#10132E] bg-[#fbf5ff]"></span>
							</div>
							<div className="flex flex-col gap-4 md:gap-3 ">
								<span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center dark:bg-[#10132E] bg-[#fbf5ff] "></span>
								{rightLists.map((item, i) => (
									<span
										key={i}
										className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-80 rounded-lg text-center dark:bg-[#10132E] bg-[#fbf5ff]">
										{item}
									</span>
								))}
							</div>
						</div>
					)}
					{id === 6 && (
						<div className="mt-5 relative">
							{/* button border magic from tailwind css buttons  */}
							{/* add rounded-md h-8 md:h-8, remove rounded-full */}
							{/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
							{/* add handleCopy() for the copy the text */}
							<div
								className={`absolute -bottom-5 right-0 ${
									copied ? "block" : "block"
								}`}>
								{/* <img src="/confetti.gif" alt="confetti" /> */}
								<Lottie options={defaultOptions} height={200} width={400} />
							</div>

							<MagicButton
								title={copied ? "Email is Copied!" : "Copy my email address"}
								icon={<IoCopyOutline />}
								position="left"
								handleClick={handleCopy}
								otherClasses="!bg-[#161A31]"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
