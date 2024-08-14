import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import Lights from "./ui/Lights";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

function Hero() {
	return (
		<div className="pb-20 pt-36">
			<Lights />
			<div className="h-[50rem] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.03] absolute top-0 left-0 flex items-center justify-center">
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>
			<div className="flex justify-center relative my-20 z-10">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
					<p className="uppercase tracking-widest text-xs text-center dark:text-blue-100 text-black-100 max-w-80">
						Dynamic Web Magic with Next.js
					</p>
					<TextGenerateEffect
						words="Transforming Concepts into Seamless User Experiences"
						className="text-center text-[40px] md:text-5xl lg:text-6xl"
					/>
					<p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
						Hi! I&apos;m{" "}
						<span>
							<strong>Ismail</strong>
						</span>
						, a Next.js Developer based in Algeria
					</p>
					<Link href="/projects">
						<MagicButton
							title="See My Projetcs"
							icon={<FaLocationArrow />}
							position="right"
						/>
					</Link>
					<div className="absolute top-[-200px] right-0">
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
