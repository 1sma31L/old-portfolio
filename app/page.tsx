import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { FaCompassDrafting } from "react-icons/fa6";
export default function Home() {
	return (
		<main className="relative bg-black-100 flex justify-center items-center felx-col overflow-hidden mx-auto sm:px-10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav
					navItems={[
						{
							name: "Projects",
							link: "/projetcs",
							icon: <FaCompassDrafting />,
						},
					]}
				/>
				<Hero />
			</div>
		</main>
	);
}
