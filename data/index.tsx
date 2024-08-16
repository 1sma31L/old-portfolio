import { CgWebsite } from "react-icons/cg";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";

export const navItems = [
	{ name: "Home", link: "#hero", icon: <FaHome /> },
	{ name: "About", link: "#about", icon: <FaUserCircle /> },
	{ name: "Projects", link: "#projects", icon: <CgWebsite /> },
	{ name: "Experience", link: "#experience", icon: <FaRankingStar /> },
	{ name: "Services", link: "#services", icon: <MdOutlineContactPhone /> },
];

export const gridItems = [
	{
		id: 1,
		title:
			"I focus on working closely with clients and keeping communication open.",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full",
		titleClassName: "justify-end",
		img: "/b1.svg",
		spareImg: "",
	},
	{
		id: 2,
		title: "Building global connections through code.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "I'm a tech enthusiast who loves building and creating things.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid.svg",
		spareImg: "/b4.svg",
	},

	{
		id: 5,
		title: "Currently building GDSC ENSTA Website.",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: 1,
		title: "Whate Is Cosmos?",
		des: "A landing page that was intened to look aesthetic and cosmic it was my first project using HTML and CSS",
		img: "/universe.png",
		iconLists: ["/HTML.png", "/CSS.png"],
		link: "https://1sma31l.github.io/astronomy/",
	},
	{
		id: 2,
		title: "My University Website",
		des: "ENSTA is website I made using React and TialwindCSS to share informations and famous asked questions for newly graduated Bachelor’s.",
		img: "/ENSTA.png",
		iconLists: ["/ts.svg", "/tail.svg", "/re.svg"],
		link: "https://1sma31l.github.io/ensta/",
	},
	{
		id: 3,
		title: "A TicTacToe Game",
		des: "This is a simple Tic-Tac-Toe game implemented in React. The game features a 3x3 grid where two players take turns marking cells with either a circle or a cross. The game detects the winning combination and highlights the winning cells, and also handles the scenario of a draw.",
		img: "/tictactoe.png",
		iconLists: ["/ts.svg", "/tail.svg", "/re.svg"],
		link: "https://1sma31l.github.io/tictactoe-game/",
	},
	{
		id: 4,
		title: "Simple Aesthetic Music Player",
		des: "This project implements a simple web-based music player using HTML, CSS, and JavaScript that plays the song Where Is My Mind ?",
		img: "/mp.png",
		iconLists: ["/HTML.png", "/CSS.png", "js.png"],
		link: "https://1sma31l.github.io/Music-player/",
	},
];

export const workExperience = [
	{
		id: 1,
		title: "Frontend Developer Intern",
		desc: "Contributed to the development of a dynamic web platform using React.js, enhancing user interactivity and overall experience.",
		className: "md:col-span-2",
		thumbnail: "/exp1.svg",
	},
	{
		id: 2,
		title: "Personal Project Experience",
		desc: "Developed numerous personal projects, focusing on crafting user interfaces with modern technologies like React and CSS frameworks to solve real-world problems.",
		className: "md:col-span-2",
		thumbnail: "/exp2.svg",
	},
	{
		id: 3,
		title: "Freelancer",
		desc: "Led multiple frontend projects, including designing and developing responsive web applications and optimizing user interfaces for various clients.",
		className: "md:col-span-2",
		thumbnail: "/exp3.svg",
	},
	{
		id: 4,
		title: "Used To API Integrations",
		desc: "Led the development of advanced user-facing features, integrating with various APIs to enhance functionality and ensure seamless data interactions. Utilized modern frontend technologies to deliver high-performance web applications.",
		className: "md:col-span-2",
		thumbnail: "/exp4.svg",
	},
];

export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		link: "https://github.com/1sma31L",
	},
	{
		id: 2,
		img: "/x.png",
		link: "https://x.com/1sma31l_",
		className: "brightness-0 invert",
	},
	{
		id: 3,
		img: "/link.svg",
		link: "https://www.linkedin.com/in/ismail-bouseekine/",
	},
];
