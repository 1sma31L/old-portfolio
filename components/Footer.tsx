/* eslint-disable @next/next/no-img-element */
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="w-full pt-20 pb-4 relative" id="services">
			{/* background grid */}
			<div className="w-screen  absolute left-0 -top-64 ">
				<img
					src="/footer-grid.svg"
					alt="grid"
					className="w-screen h-screen opacity-90"
				/>
			</div>

			<div className="flex flex-col items-center z-50">
				<h1 className="heading lg:max-w-[45vw] capitalize">
					<span className="text-purple">You</span> Want me to work on achieving
					<span className="text-purple"> your ideas?</span>
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					Reach out to me on{" "}
					<span className="text-[#fab52c] font-bold">Khamasat</span> and buy my
					services.
				</p>
				<Link href="https://khamsat.com/user/ismailboussekine" target="_blank">
					<MagicButton
						title="Buy My Services"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</Link>
			</div>
			<div className="flex mt-16 xl:flex-row flex-col-reverse justify-around items-center">
				<p className="md:text-base text-[12px] md:font-normal font-light p-2">
					© {currentYear}{" "}
					<strong className="dark:text-purple">
						Ismail Mohamed Boussekine
					</strong>{" "}
					| All Rights Reserved
				</p>
				<div className="flex items-center md:gap-3 gap-2 p-2">
					{socialMedia.map((info) => (
						<div
							key={info.id}
							className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 dark:bg-black-200 bg-black-100 rounded-lg border border-black-300">
							<a href={info.link} target="_blank">
								<img
									src={info.img}
									alt="icons"
									width={20}
									height={20}
									className={info.className}
								/>
							</a>
						</div>
					))}
					<ThemeSwitcher className="w-10 h-10" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
