import React from "react";

function project_1() {
	return {
		date: "Fall 2024",
		title: "Ticketing App",
		description:
			"ASP.NET Core MVC ticketing system with CRUD operations, Entity Framework Core, and PostgreSQL integration.",
		keywords: [
			"Ticketing App",
			"ASP.NET Core",
			"MVC",
			"Junyong Choi",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.project-image {
					width: 100%;
					max-width: 800px;
					border-radius: 8px;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
					margin: 20px 0;
				}

				.project-details {
					max-width: 800px;
					line-height: 1.8;
				}

				.tech-stack {
					display: flex;
					flex-wrap: wrap;
					gap: 8px;
					margin: 20px 0;
				}

				.tech-tag {
					background: #f0f0f0;
					padding: 4px 12px;
					border-radius: 16px;
					font-size: 14px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src="/images/projects/event list.png"
						alt="Ticketing App Screenshot"
						className="project-image"
					/>
					<div className="project-details">
						<h3>Project Overview</h3>
						<p>
							A full ticketing web application built for a school project. 
							I implemented CRUD operations for Events, Categories, and Purchases, 
							and learned how to structure a multi-step purchase confirmation flow.
						</p>
						<h3>What I Learned</h3>
						<ul>
							<li>Setting up Entity Framework Core models and relationships</li>
							<li>Working with PostgreSQL for database storage</li>
							<li>Using LINQ and Include for loading navigation properties</li>
							<li>Razor-based forms and MVC patterns</li>
						</ul>
						<div className="tech-stack">
							<span className="tech-tag">C#</span>
							<span className="tech-tag">ASP.NET Core MVC</span>
							<span className="tech-tag">Entity Framework</span>
							<span className="tech-tag">PostgreSQL</span>
							<span className="tech-tag">Razor Pages</span>
						</div>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function project_2() {
	return {
		date: "Fall 2024",
		title: "PHP Quiz App",
		description:
			"Interactive quiz application with MySQL database, session management, and randomized questions.",
		keywords: [
			"PHP Quiz App",
			"PHP",
			"MySQL",
			"Junyong Choi",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.project-image {
					width: 100%;
					max-width: 800px;
					border-radius: 8px;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
					margin: 20px 0;
				}

				.project-details {
					max-width: 800px;
					line-height: 1.8;
				}

				.tech-stack {
					display: flex;
					flex-wrap: wrap;
					gap: 8px;
					margin: 20px 0;
				}

				.tech-tag {
					background: #f0f0f0;
					padding: 4px 12px;
					border-radius: 16px;
					font-size: 14px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src="/images/projects/php quiz demo.png"
						alt="PHP Quiz App Screenshot"
						className="project-image"
					/>
					<div className="project-details">
						<h3>Project Overview</h3>
						<p>
							A quiz application I built for a class assignment. Users can select 
							categories, answer randomized questions, and see their scores at the end.
							This was my first time building something with a real database backend.
						</p>
						<h3>What I Learned</h3>
						<ul>
							<li>PHP session and cookie management for state</li>
							<li>MySQL database design and queries</li>
							<li>Randomizing and shuffling question arrays</li>
							<li>Form handling with GET/POST methods</li>
						</ul>
						<div className="tech-stack">
							<span className="tech-tag">PHP</span>
							<span className="tech-tag">MySQL</span>
							<span className="tech-tag">HTML/CSS</span>
							<span className="tech-tag">Sessions</span>
						</div>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function project_3() {
	return {
		date: "Fall 2024",
		title: "Java Payroll System",
		description:
			"Console-based payroll calculator demonstrating OOP principles with different employee types.",
		keywords: [
			"Java Payroll System",
			"Java",
			"OOP",
			"Junyong Choi",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.project-image {
					width: 100%;
					max-width: 800px;
					border-radius: 8px;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
					margin: 20px 0;
				}

				.project-details {
					max-width: 800px;
					line-height: 1.8;
				}

				.tech-stack {
					display: flex;
					flex-wrap: wrap;
					gap: 8px;
					margin: 20px 0;
				}

				.tech-tag {
					background: #f0f0f0;
					padding: 4px 12px;
					border-radius: 16px;
					font-size: 14px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"
						alt="Java Payroll System"
						className="project-image"
						style={{maxWidth: "200px"}}
					/>
					<div className="project-details">
						<h3>Project Overview</h3>
						<p>
							A console-based payroll calculator I built to practice Java OOP. 
							I created different employee types (Salary, Hourly, Commission) and 
							learned how inheritance and polymorphism work in practice.
						</p>
						<h3>What I Learned</h3>
						<ul>
							<li>Class inheritance and method overriding</li>
							<li>Encapsulation and constructor overloading</li>
							<li>Using super() for subclass-superclass interaction</li>
							<li>Formatted output with toString() implementations</li>
						</ul>
						<div className="tech-stack">
							<span className="tech-tag">Java</span>
							<span className="tech-tag">OOP</span>
							<span className="tech-tag">Inheritance</span>
							<span className="tech-tag">Arrays/ArrayList</span>
						</div>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [project_1, project_2, project_3];

export default myArticles;
