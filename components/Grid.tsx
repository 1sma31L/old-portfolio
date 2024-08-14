/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "../data/index";
function Grid() {
	return (
		<section>
			<BentoGrid className="max-w-4xl mx-auto">
				{gridItems.map((item: any, i: number) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						// icon={item.icon}
						className={i === 3 || i === 6 ? "md:col-span-2" : ""}
					/>
				))}
			</BentoGrid>
		</section>
	);
}

export default Grid;
