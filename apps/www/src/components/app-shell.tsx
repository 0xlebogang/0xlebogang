"use client";

import {
	Column,
	type GlobalThemeProps,
	Grid,
	Header,
	HeaderMenuButton,
	HeaderMenuItem,
	HeaderName,
	HeaderNavigation,
	HeaderSideNavItems,
	SideNav,
	SideNavItems,
	SkipToContent,
	Theme,
} from "@repo/ui";
import { usePathname } from "next/navigation";
import * as React from "react";

export interface AppShellProps extends GlobalThemeProps {
	platform: {
		prefix: string;
		appName: string;
		url: string;
	};
	navLinks: {
		label: string;
		url: string;
	}[];
	children: React.ReactNode;
}

export default function AppShell({
	theme = "white",
	platform,
	navLinks,
	children,
}: AppShellProps) {
	const plaformFullName = `${platform.prefix} ${platform.appName}`;
	const pathname = usePathname();
	const [isSideNavExpanded, setIsSideNavExpanded] =
		React.useState<boolean>(false);

	function onClickSideNavExpand() {
		setIsSideNavExpanded((prev) => !prev);
	}

	return (
		<Theme theme={theme}>
			<Header aria-label={plaformFullName}>
				<SkipToContent />
				<HeaderMenuButton
					aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
					onClick={onClickSideNavExpand}
					isActive={isSideNavExpanded}
					aria-expanded={isSideNavExpanded}
				/>
				<HeaderName href={platform.url} prefix={platform.prefix}>
					{platform.appName}
				</HeaderName>
				<HeaderNavigation aria-label={plaformFullName}>
					{navLinks.map((link) => (
						<HeaderMenuItem
							key={link.url}
							href={link.url}
							isActive={pathname === link.url}
						>
							{link.label}
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
							{navLinks.map((link) => (
								<HeaderMenuItem
									key={link.url}
									href={link.url}
									isActive={pathname === link.url}
								>
									{link.label}
								</HeaderMenuItem>
							))}
						</HeaderSideNavItems>
					</SideNavItems>
				</SideNav>
			</Header>
			<Grid>
				<Column span="100%" as="main">
					{children}
				</Column>
			</Grid>
		</Theme>
	);
}
