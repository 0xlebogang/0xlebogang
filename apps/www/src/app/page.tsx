"use client";

import {
	Button,
	Column,
	FlexGrid,
	Form,
	Heading,
	Row,
	StructuredListBody,
	StructuredListCell,
	StructuredListHead,
	StructuredListRow,
	StructuredListWrapper,
	Tag,
	TextArea,
	TextInput,
	Tile,
} from "@repo/ui";
import {
	ArrowRight,
	Email,
	LogoGithub,
	LogoLinkedin,
	LogoYoutube,
} from "@repo/ui/icons";
import type * as React from "react";

export default function HomePage() {
	return (
		<FlexGrid fullWidth style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
			{/* 1. HERO SECTION */}
			<Row style={{ marginBottom: "4rem" }}>
				<Column sm={4} md={8} lg={12}>
					<Tag type="blue" style={{ marginBottom: "1rem" }}>
						UNISA Math & CS Student
					</Tag>
					<Heading
						style={{
							fontSize: "3.5rem",
							fontWeight: 300,
							lineHeight: 1.1,
							marginBottom: "1rem",
						}}
					>
						Lebogang Phoshoko
					</Heading>
					Aspiring Entrepreneur & Self-Taught Software Developer specializing in
					backend systems, cloud automation, and DevOps infrastructure.
					<div style={{ display: "flex", gap: "1rem" }}>
						<Button kind="primary" renderIcon={ArrowRight} href="#projects">
							View Projects
						</Button>
						<Button kind="tertiary" href="#contact">
							Contact Me
						</Button>
					</div>
				</Column>
			</Row>

			{/* 2. TECHNOLOGIES SECTION */}
			<Row style={{ marginBottom: "4rem" }}>
				<Column sm={4} md={8} lg={16}>
					<Heading style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>
						Technologies & Tools
					</Heading>
				</Column>

				{[
					{
						name: "TypeScript",
						tag: "Language",
						desc: "Type safety and developer experience across full-stack applications.",
					},
					{
						name: "Go",
						tag: "Language",
						desc: "Building high-performance REST APIs, concurrency, and backend microservices.",
					},
					{
						name: "Python",
						tag: "Language",
						desc: "API development with Django REST Framework, FastAPI, and scripting.",
					},
					{
						name: "Docker",
						tag: "DevOps",
						desc: "Containerizing workloads for homelabs, staging, and CI/CD testing.",
					},
					{
						name: "Linux (Fedora)",
						tag: "OS",
						desc: "Daily workstation OS for software development and homelab management.",
					},
					{
						name: "DigitalOcean & Azure",
						tag: "Cloud",
						desc: "Hosting Droplets, cloud architecture, and infrastructure experimentation.",
					},
					{
						name: "Terraform",
						tag: "IaC",
						desc: "Declarative infrastructure management for cloud and homelab deployments.",
					},
				].map((tech) => (
					<Column
						sm={4}
						md={4}
						lg={4}
						key={tech.name}
						style={{ marginBottom: "1rem" }}
					>
						<Tile style={{ height: "100%" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: "0.75rem",
								}}
							>
								<Heading style={{ fontSize: "1.125rem", fontWeight: 600 }}>
									{tech.name}
								</Heading>
								<Tag type="cool-gray">{tech.tag}</Tag>
							</div>
							<p
								style={{
									fontSize: "0.875rem",
									color: "var(--cds-text-secondary, #c6c6c6)",
								}}
							>
								{tech.desc}
							</p>
						</Tile>
					</Column>
				))}
			</Row>

			{/* 3. FEATURED PROJECTS SECTION */}
			<Row style={{ marginBottom: "4rem" }} id="projects">
				<Column sm={4} md={8} lg={16}>
					<Heading style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>
						Featured Projects
					</Heading>
				</Column>

				{[
					{
						title: "Kodaflux",
						desc: "AI agent that reads any GitHub repo and generates a unified documentation site for project dependencies.",
						stack: [
							"FastAPI",
							"Next.js",
							"TypeScript",
							"Terraform",
							"DigitalOcean",
						],
					},
					{
						title: "Smartik",
						desc: "Automated matric script marking system built for speed and precision.",
						stack: ["Electron.js", "Go (Echo)", "Tailwind CSS", "Turborepo"],
					},
					{
						title: "GKSS Code Challenges Platform",
						desc: "Complete coding challenge score platform and workflow engine for student communities.",
						stack: ["Next.js", "TypeScript", "Turborepo", "Shadcn UI"],
					},
				].map((project) => (
					<Column
						sm={4}
						md={4}
						lg={5}
						key={project.title}
						style={{ marginBottom: "1.5rem" }}
					>
						<Tile
							style={{
								height: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<div>
								<Heading
									style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}
								>
									{project.title}
								</Heading>
								<p
									style={{
										fontSize: "0.875rem",
										color: "var(--cds-text-secondary, #c6c6c6)",
										marginBottom: "1rem",
									}}
								>
									{project.desc}
								</p>
							</div>
							<div>
								{project.stack.map((item) => (
									<Tag
										type="teal"
										key={item}
										style={{ marginRight: "0.25rem", marginBottom: "0.25rem" }}
									>
										{item}
									</Tag>
								))}
							</div>
						</Tile>
					</Column>
				))}
			</Row>

			{/* 4. EXPERIENCE SECTION */}
			<Row style={{ marginBottom: "4rem" }}>
				<Column sm={4} md={8} lg={16}>
					<Heading style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>
						Experience
					</Heading>

					<StructuredListWrapper>
						<StructuredListHead>
							<StructuredListRow head>
								<StructuredListCell head>
									Role & Organization
								</StructuredListCell>
								<StructuredListCell head>Period</StructuredListCell>
								<StructuredListCell head>Description</StructuredListCell>
							</StructuredListRow>
						</StructuredListHead>
						<StructuredListBody>
							<StructuredListRow>
								<StructuredListCell>
									<strong>Technical Officer</strong>
									<br />
									Geekulcha Student Society (GKSS-UNISA)
								</StructuredListCell>
								<StructuredListCell>Feb 2025 – Dec 2025</StructuredListCell>
								<StructuredListCell>
									Maintained and managed technical infrastructure, leading
									innovation and technical excellence initiatives for society
									members.
								</StructuredListCell>
							</StructuredListRow>
							<StructuredListRow>
								<StructuredListCell>
									<strong>General Assistant</strong>
									<br />
									Thrupps & Co.
								</StructuredListCell>
								<StructuredListCell>Nov 2018 – Jan 2021</StructuredListCell>
								<StructuredListCell>
									Customer service, gift wrapping, and administrative support.
									Developed strong organizational workflows.
								</StructuredListCell>
							</StructuredListRow>
						</StructuredListBody>
					</StructuredListWrapper>
				</Column>
			</Row>

			{/* 5. CONTACT SECTION */}
			<Row id="contact">
				<Column sm={4} md={4} lg={8}>
					<Heading style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
						Get In Touch
					</Heading>
					<p
						style={{
							marginBottom: "1.5rem",
							color: "var(--cds-text-secondary, #c6c6c6)",
						}}
					>
						Have a question, collaboration idea, or want to connect? Send a
						message or reach out on socials.
					</p>

					<div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
						<Button
							kind="ghost"
							hasIconOnly
							renderIcon={LogoGithub}
							iconDescription="GitHub"
							href="https://github.com"
							target="_blank"
						/>
						<Button
							kind="ghost"
							hasIconOnly
							renderIcon={LogoLinkedin}
							iconDescription="LinkedIn"
							href="https://linkedin.com"
							target="_blank"
						/>
						<Button
							kind="ghost"
							hasIconOnly
							renderIcon={LogoYoutube}
							iconDescription="YouTube"
							href="https://youtube.com"
							target="_blank"
						/>
						<Button
							kind="ghost"
							hasIconOnly
							renderIcon={Email}
							iconDescription="Email"
							href="mailto:dev.phoshoko.ml@gmail.com"
						/>
					</div>
				</Column>

				<Column sm={4} md={4} lg={8}>
					<Tile>
						<Form onSubmit={(e: React.FormEvent) => e.preventDefault()}>
							<TextInput
								id="contact-name"
								labelText="Name"
								placeholder="Your Name"
								style={{ marginBottom: "1rem" }}
							/>
							<TextInput
								id="contact-email"
								labelText="Email"
								placeholder="your.email@example.com"
								style={{ marginBottom: "1rem" }}
							/>
							<TextArea
								id="contact-message"
								labelText="Message"
								placeholder="How can we collaborate?"
								rows={4}
								style={{ marginBottom: "1.5rem" }}
							/>
							<Button type="submit" kind="primary" style={{ width: "100%" }}>
								Send Message
							</Button>
						</Form>
					</Tile>
				</Column>
			</Row>
		</FlexGrid>
	);
}
