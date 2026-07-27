"use client";

import {
	Header,
	HeaderMenuButton,
	HeaderMenuItem,
	HeaderName,
	HeaderNavigation,
	HeaderSideNavItems,
	SideNav,
	SideNavItems,
} from "@repo/ui";
import * as React from "react";

export interface NavbarProps {
	platformName: string;
	headerName: {
		url: string;
		prefix: string;
		text: string;
	};
	headerNav: {
		text: string;
		url: string;
	}[];
}

export default function Navbar(props: NavbarProps) {
	const [isSideNavExpanded, SetIsSideNavExapanded] = React.useState(false);

	function onClickSideNavExpand() {
		SetIsSideNavExapanded((prev) => !prev);
	}

	return (
		<Header aria-label={props.platformName}>
			<HeaderMenuButton
				aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
				onClick={onClickSideNavExpand}
				isActive={isSideNavExpanded}
				aria-expanded={isSideNavExpanded}
			/>
			<HeaderName href={props.headerName.url} prefix={props.headerName.prefix}>
				{props.headerName.text}
			</HeaderName>
			<HeaderNavigation
				aria-label={`${props.headerName.prefix} ${props.headerName.text}`}
			>
				{props.headerNav.map((item) => (
					<HeaderMenuItem key={`item-${item.url}`} href={item.url}>
						{item.text}
					</HeaderMenuItem>
				))}
			</HeaderNavigation>
			<SideNav
				aria-label="Side navigation"
				expanded={isSideNavExpanded}
				isPersistent={false}
				onSideNavBlur={onClickSideNavExpand}
			>
				<SideNavItems>
					<HeaderSideNavItems>
						{props.headerNav.map((item) => (
							<HeaderMenuItem key={`item-${item.url}`} href={item.url}>
								{item.text}
							</HeaderMenuItem>
						))}
					</HeaderSideNavItems>
				</SideNavItems>
			</SideNav>
		</Header>
	);
}
