import type * as React from "react";
import "@/styles/main.css";

export interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>{props.children}</body>
		</html>
	);
}
