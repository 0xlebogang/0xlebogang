import { Theme } from "@repo/ui";
import Footer from "@repo/ui/components/footer";
import Navbar, { type NavbarProps } from "@repo/ui/components/navbar";
import type * as React from "react";

import "@repo/ui/styles/main.scss";

export interface RootLayoutProps {
	children: React.ReactNode;
}

function getGlobalNav(): NavbarProps {
	return {
		platformName: "Lebogang Phoshoko's Portfolio Website",
		headerName: {
			text: "Portfolio",
			prefix: "Lebo's",
			url: "/",
		},
		headerNav: [
			{
				text: "About",
				url: "/about",
			},
			{
				text: "Projects",
				url: "/projects",
			},
			{
				text: "Blog",
				url: "/blog",
			},
		],
	};
}

export default function RootLayout(props: RootLayoutProps) {
	const nav = getGlobalNav();

	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Theme theme="g90">
					<Navbar
						platformName={nav.platformName}
						headerName={nav.headerName}
						headerNav={nav.headerNav}
					/>
					{props.children}
					<Footer platformName={nav.platformName} />
				</Theme>
			</body>
		</html>
	);
}
