import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/index";
const RecenetProjects = dynamic(() => import("../components/RecentProjects"), {
	ssr: false,
});
export default function Home() {
	return (
		<main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} className="dark:bg-black-100" />
				<Hero />
				<Grid />
				<RecenetProjects />
			</div>
		</main>
	);
}
