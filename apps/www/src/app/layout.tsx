import type * as React from "react";
import "@repo/ui/scss/main.scss";
import AppShell, { type AppShellProps } from "@/components/app-shell";
import Footer from "@/components/sections/footer";

export interface RootLayoutProps {
	children: React.ReactNode;
}

const shellData: Omit<AppShellProps, "children"> = {
	navLinks: [
		{
			label: "About",
			url: "/about",
		},
		{
			label: "Projects",
			url: "/projects",
		},
		{
			label: "Blog",
			url: "/blog",
		},
	],

	platform: {
		prefix: "Lebo's",
		appName: "Portfolio",
		url: "/",
	},
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<AppShell platform={shellData.platform} navLinks={shellData.navLinks}>
					{children}
					<Footer />
				</AppShell>
			</body>
		</html>
	);
}
