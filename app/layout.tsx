import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Theme-provider";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ismail M. Boussekine - Modern Protfolio",
	description:
		"Ismail M. Boussekine's Portfolio, Showcasing expertise in HTML, CSS, Tailwind CSS, React, and Next.js, And some projects and testimonials.",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system">
					{children}
				</ThemeProvider>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
