/* eslint-disable @next/next/no-img-element */
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import Lights from "./ui/Lights";

function Hero() {
	return (
		<section className="lg:pb-8 lg:pt-32 pt-8 px-2" id="hero">
			<Lights />
			{/* Grid */}
			<div className="h-[50rem] w-full dark:bg-grid-white/[0.02] bg-grid-black/[0.03] absolute top-0 left-0 flex items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
				{/* End of Grid */}
			</div>
			<div className="flex justify-center items-center flex-col lg:flex-row my-20 z-10 min-h-[40vh] gap-x-8 gap-y-16">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<p className="uppercase tracking-widest text-xs text-center dark:text-blue-100 text-black-100 max-w-80">
						Dynamic Web Magic with Next.js
					</p>
					<TextGenerateEffect
						words="Turning Ideas into Beautiful, Responsive Websites"
						className="text-center text-[40px] md:text-5xl lg:text-6xl relative z-50"
					/>
					<p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
						Hi! I&apos;m
						<strong> Ismail</strong>, a Front-End Developer from Algeria
					</p>
					<Link href="#projects">
						<MagicButton
							title="See My Projetcs"
							icon={<FaLocationArrow />}
							position="right"
						/>
					</Link>
				</div>
				<div className="relative z-50 md:w-[50%] lg:min-w-[400px] min-w-[300px] w-[100%] rounded-lg overflow-hidden hover:scale-[1.03] duration-300 transition-all shadow-xl hover:shadow-3xl">
					<img
						src="/me.jpg"
						alt="my picture"
						className=" w-full h-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
