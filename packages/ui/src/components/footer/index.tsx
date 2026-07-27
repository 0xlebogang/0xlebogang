"use client";

import { Column, FlexGrid, Row } from "@repo/ui";

export interface FooterProps {
	platformName: string;
}

export default function Footer(props: FooterProps) {
	const copyrightYear = new Date().getFullYear();

	return (
		<footer>
			<FlexGrid fullWidth>
				<Row
					style={{
						borderTop: "1px solid var(--cds-border-subtle, #393939)",
						paddingBlock: "1.5rem",
					}}
				>
					<Column sm={4} md={4} lg={8} style={{ textAlign: "center" }}>
						<p
							style={{
								fontSize: "0.75rem",
								color: "var(--cds-text-helper, #8d8d8d)",
							}}
						>
							&copy; {copyrightYear} {props.platformName}
						</p>
					</Column>
				</Row>
			</FlexGrid>
		</footer>
	);
}
