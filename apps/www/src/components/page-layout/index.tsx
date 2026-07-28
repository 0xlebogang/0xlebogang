"use client";

import { Theme } from "@astryxdesign/core";
import { AppShell } from "@astryxdesign/core/AppShell";
import { neutralTheme } from "@astryxdesign/theme-neutral";
import {
	SiGithub,
	SiInstagram,
	SiYoutube,
} from "@icons-pack/react-simple-icons";
import type * as React from "react";
import Navbar, { type NavbarProps } from "../navbar";

export interface ShellLayoutprops {
	children: React.ReactNode;
}

function getNavLinks(): NavbarProps {
	return {
		heading: "Lebo Phoshoko",
		internalLinks: [
			{
				label: "About",
				url: "/about",
				isSelected: true,
			},
			{
				label: "Projects",
				url: "/projects",
				isSelected: false,
			},
			{
				label: "Blog",
				url: "/blog",
				isSelected: false,
			},
		],
		socialLinks: [
			{
				icon: <SiGithub style={{ height: 16, width: 16 }} />,
				url: "https://github.com/0xlebogang",
			},
			{
				icon: <SiYoutube style={{ height: 16, width: 16 }} />,
				url: "https://youtube.com/onlyphantomleii",
			},
			{
				icon: <SiInstagram style={{ height: 16, width: 16 }} />,
				url: "https://instagram.com/onlyphantomleii",
			},
		],
	};
}

export default function PageLayout(props: ShellLayoutprops) {
	const navbarData = getNavLinks();
	return (
		<Theme theme={neutralTheme}>
			<AppShell
				contentPadding={6}
				style={{ height: "100%", minHeight: 0 }}
				topNav={
					<Navbar
						heading={navbarData.heading}
						internalLinks={navbarData.internalLinks}
						socialLinks={navbarData.socialLinks}
					/>
				}
			>
				{props.children}
			</AppShell>
		</Theme>
	);
}
