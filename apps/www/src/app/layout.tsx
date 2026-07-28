import type * as React from "react";
import PageLayout from "@/components/page-layout";

import "@/styles/main.css";

export interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<PageLayout>{props.children}</PageLayout>
			</body>
		</html>
	);
}
