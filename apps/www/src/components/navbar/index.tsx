"use client";

import {
	Button,
	HStack,
	Icon,
	Link,
	NavIcon,
	TopNav,
	TopNavHeading,
	TopNavItem,
} from "@astryxdesign/core";
import { CubeIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import {
	SiGithub,
	SiInstagram,
	SiYoutube,
} from "@icons-pack/react-simple-icons";
import type * as React from "react";

export interface NavbarProps {
	heading: string;
	internalLinks: {
		label: string;
		url: string;
		isSelected: boolean;
	}[];
	socialLinks: {
		icon: React.ReactNode;
		url: string;
	}[];
}

export default function Navbar(props: NavbarProps) {
	return (
		<TopNav
			label="Main navigation"
			heading={<TopNavHeading heading={props.heading} />}
			startContent={
				<>
					{props.internalLinks.map((link) => (
						<TopNavItem
							key={`${link.label} ${link.url}`}
							label={link.label}
							href={link.url}
							isSelected={link.isSelected}
						/>
					))}
				</>
			}
			endContent={
				<HStack gap={4}>
					{props.socialLinks.map((link) => (
						<Link key={`${link.url}`} href={link.url}>
							{link.icon}
						</Link>
					))}
				</HStack>
			}
		/>
	);
}
