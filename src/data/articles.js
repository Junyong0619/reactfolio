import React from "react";

function project_1() {
	return {
		date: "Fall 2025",
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
		date: "Fall 2025",
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
		date: "Fall 2025",
		title: "Java Payroll System",
		description:
			"Payroll calculation system using Java OOP principles with Salary, Hourly, and Commission employee types.",
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
							A payroll calculation system I built using Java OOP principles. 
							I designed class structures for Salary, Hourly, and Commission employee types
							and implemented payroll logic and employee data storage using arrays and ArrayLists.
						</p>
						<h3>What I Learned</h3>
						<ul>
							<li>Designed class structures for different employee types</li>
							<li>Applied inheritance, encapsulation, and method overriding</li>
							<li>Utilized super() for subclass-superclass interaction</li>
							<li>Generated formatted payroll output with toString() implementations</li>
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

function project_4() {
	return {
		date: "Fall 2025",
		title: "Clinical Management System – Data Modeling",
		description:
			"Data modeling project for ABC Clinic with Conceptual ERD, Physical ERD, and UML Class Diagram.",
		keywords: [
			"Data Modeling",
			"ERD",
			"UML",
			"Database Design",
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
					<div className="project-details">
						<h3>Project Overview</h3>
						<p>
							A data modeling project based on ABC Clinic's requirements document. 
							I identified core entities such as patients, staff, appointments, visits, 
							tests, and payments, and designed a complete data model from 
							Conceptual ERD → Physical ERD → Class Diagram.
						</p>

						<h3>Conceptual ERD</h3>
						<img
							src="https://raw.githubusercontent.com/Junyong0619/COMP2147-ClinicalManagement-DataModeling/main/Conceptual(14)%202025-11-21%20031242.png"
							alt="Conceptual ERD"
							className="project-image"
						/>

						<h3>Physical ERD</h3>
						<img
							src="https://raw.githubusercontent.com/Junyong0619/COMP2147-ClinicalManagement-DataModeling/main/psysical(15).png"
							alt="Physical ERD"
							className="project-image"
						/>

						<h3>Class Diagram</h3>
						<img
							src="https://raw.githubusercontent.com/Junyong0619/COMP2147-ClinicalManagement-DataModeling/main/class%20(16).png"
							alt="Class Diagram"
							className="project-image"
						/>

						<h3>What I Learned</h3>
						<ul>
							<li>Requirements analysis and entity identification</li>
							<li>Data normalization principles</li>
							<li>Relationship mapping and cardinality</li>
							<li>Resolving M:N relationships with junction tables</li>
							<li>Translating conceptual models to physical database design</li>
						</ul>
						<div className="tech-stack">
							<span className="tech-tag">ERD Modeling</span>
							<span className="tech-tag">UML Class Diagram</span>
							<span className="tech-tag">Database Design</span>
							<span className="tech-tag">Requirements Analysis</span>
						</div>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function project_5() {
	return {
		date: "Fall 2025",
		title: "Student Management System",
		description:
			"Console-based student management system using Java OOP principles.",
		keywords: [
			"Java",
			"OOP",
			"Student Management",
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

				.code-block {
					background: #1e1e1e;
					color: #d4d4d4;
					padding: 16px;
					border-radius: 8px;
					overflow-x: auto;
					font-family: 'Consolas', monospace;
					font-size: 14px;
					margin: 16px 0;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"
						alt="Java Student Management System"
						className="project-image"
						style={{maxWidth: "200px"}}
					/>
					<div className="project-details">
						<h3>Project Overview</h3>
						<p>
							A console-based student management system built for the COMP2130 course.
							It supports creating Undergraduate and Graduate students, storing them 
							in an array/ArrayList, and displaying all students or only those 
							eligible for graduation based on their average marks.
						</p>

						<h3>Class Structure</h3>
						<ul>
							<li><strong>Student.java</strong> - Base class with common student properties</li>
							<li><strong>UndergraduateStudent.java</strong> - Extends Student for undergraduate students</li>
							<li><strong>GraduateStudent.java</strong> - Extends Student for graduate students</li>
							<li><strong>Address.java</strong> - Aggregated class for student address</li>
							<li><strong>Main.java</strong> - Console menu and program entry point</li>
						</ul>

						<h3>Features</h3>
						<ul>
							<li>Create Undergraduate and Graduate students</li>
							<li>Store students in array/ArrayList</li>
							<li>Display all students</li>
							<li>Show students eligible for graduation based on average marks</li>
							<li>Interactive console menu system</li>
						</ul>

						<h3>What I Learned</h3>
						<ul>
							<li>OOP fundamentals: inheritance, aggregation, method overriding</li>
							<li>Array and ArrayList handling in Java</li>
							<li>Building interactive console applications</li>
							<li>Encapsulation through private fields and getters/setters</li>
						</ul>
						<div className="tech-stack">
							<span className="tech-tag">Java</span>
							<span className="tech-tag">OOP</span>
							<span className="tech-tag">Inheritance</span>
							<span className="tech-tag">Arrays/ArrayList</span>
							<span className="tech-tag">Aggregation</span>
						</div>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [project_1, project_2, project_3, project_4, project_5];

export default myArticles;
