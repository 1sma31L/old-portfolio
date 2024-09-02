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
		imgClassName: "w-full h-full brightness-50",
		titleClassName: "justify-end text-white",
		img: "/programming.webp",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span- lg:row-span-3",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "I'm a tech enthusiast who loves building and creating things.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1 ",
		imgClassName: "brightness-50",
		titleClassName: "justify-start text-white",
		img: "/programming3.webp",
		spareImg: "",
	},

	{
		id: 5,
		title: "Currently building GDSC ENSTA Website.",
		description: "The Inside Scoop",
		className: "md:col-span-6 lg:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
		titleClassName: "justify-center md:justify-start lg:justify-center",
		img: "/b5.svg",
		spareImg: "/grid.svg",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-2 md:col-span-6 md:row-span-2",
		imgClassName: "",
		titleClassName:
			"justify-center md:max-w-full max-w-60 text-center text-white",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: 1,
		title: "What Is Trending",
		des: "Simple website to check what are the trending Movies, TV Shows and Anime.",
		img: "/wt.webp",
		iconLists: ["/ts.svg", "/tail.svg", "/re.svg", "next.svg"],
		link: "https://what-is-trending.vercel.app/",
	},
	{
		id: 2,
		title: "Anonymous Message Sender",
		des: "Simple webpage made using React and Firebase to send anonymous messages.",
		img: "/anon.png",
		iconLists: ["/ts.svg", "/re.svg", "/tail.svg", "next.svg", "firebase.svg"],
		link: "https://nglismail.vercel.app/",
	},
	{
		id: 3,
		title: "My University Website",
		des: "ENSTA is website I made using React and TialwindCSS to share informations and famous asked questions for newly graduated Bachelor’s.",
		img: "/ENSTA.webp",
		iconLists: ["/js.png", "/ts.svg", "/tail.svg", "/re.svg"],
		link: "https://1sma31l.github.io/ensta/",
	},
	{
		id: 4,
		title: "A TicTacToe Game",
		des: "This is a simple Tic-Tac-Toe game implemented in React. The game features a 3x3 grid where two players take turns marking cells with either a circle or a cross. The game detects the winning combination and highlights the winning cells, and also handles the scenario of a draw.",
		img: "/tictactoe.webp",
		iconLists: ["/js.png", "/tail.svg", "/re.svg"],
		link: "https://1sma31l.github.io/tictactoe-game/",
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
		link: "https://x.com/11sma31l",
		className: "brightness-0 invert",
	},
	{
		id: 3,
		img: "/link.svg",
		link: "https://www.linkedin.com/in/ismail-bouseekine/",
	},
];
