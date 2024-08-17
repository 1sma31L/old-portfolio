/* eslint-disable @next/next/no-img-element */
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import Lights from "./ui/Lights";

function Hero() {
	return (
		<section className="lg:pb-8 lg:pt-32 pt-8 px-2 min-h-screen" id="hero">
			<Lights />
			{/* Grid */}
			<div className="h-[54rem] lg:h-[50rem] w-full dark:bg-grid-white/[0.05] bg-grid-black/[0.02] absolute top-0 left-0 flex items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
				{/* End of Grid */}
			</div>
			<div className="flex justify-center items-center flex-col lg:flex-row my-20 relative z-50 min-h-[40vh] gap-x-8 gap-y-16">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<p className="capitalize tracking-widest text-xs text-center dark:text-blue-100 text-black-100 max-w-80">
						&quot;Simplicity is the soul of efficiency.&quot;
					</p>
					<TextGenerateEffect
						words="Turning Ideas into Beautiful, Responsive Websites"
						className="text-center text-[40px] md:text-4xl lg:text-5xl relative z-50"
					/>
					<p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
						Hi! I&apos;m
						<strong> Ismail</strong>, a <strong>Front-End Developer</strong>{" "}
						from Algeria
					</p>
					<Link href="#projects" className="lg:block hidden">
						<MagicButton
							title="See My Projetcs"
							icon={<FaLocationArrow />}
							position="right"
						/>
					</Link>
				</div>
				<div className="relative z-50 sm:w-[40%] lg:min-w-[400px] min-w-[300px] w-[80%] rounded-full overflow-hidden hover:scale-[1.03] duration-300 transition-all shadow-xl hover:shadow-3xl border-2 dark:shadow-[0_0_60px_0_rgba(203,172,249,0.5)] border-purple">
					<img
						src="/me.webp"
						alt="my picture"
						className=" w-full h-full object-cover"
					/>
				</div>
				<Link href="#projects" className="lg:hidden block">
					<MagicButton
						title="See My Projetcs"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</Link>
			</div>
		</section>
	);
}

export default Hero;
