const INFO = {
	main: {
		title: "Backend Developer Portfolio",
		name: "Junyong Choi",
		email: "dmsql6829@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/Junyong0619",
		linkedin: "https://www.linkedin.com/in/junyong-choi-23b65035a/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Backend Developer | Learning & Growing Every Day",
		description:
			"I'm a Computer Programming & Analysis student at George Brown College, still early in my development journey but genuinely motivated to improve. Most of my experience comes from coursework and small projects using PHP, Java, C#, JavaScript, SQL, and ASP.NET MVC. I'm steadily getting better at understanding how data moves through an application and how to structure code more cleanly.",
	},

	about: {
		title: "I'm Junyong Choi, a student developer who values consistency, patience, and a willingness to learn.",
		description:
			"I have implemented basic CRUD features, form-handling logic, simple authentication/session flows, and built database schemas based on project requirements. I'm still building confidence in back-end logic, but I always make an effort to be clear, responsible, and open to feedback. What I lack in experience, I try to make up for with a genuine desire to grow as a developer.",
	},

	articles: {
		title: "Project Showcase",
		description:
			"Visual walkthrough of my projects. Click on each one to see screenshots and details about what I built and learned.",
	},

	projects: [
		{
			title: "PHP Quiz App",
			description:
				"A quiz app I made with PHP and MySQL for a class assignment. I figured out how to use sessions, randomize questions, and track scores. It was my first time building something with a real database backend.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/php/php.png",
			linkText: "View Project",
			link: "https://github.com/Junyong0619/COMP1230-QuizApp",
		},

		{
			title: "Java Payroll System",
			description:
				"A payroll calculation system using Java OOP principles. I designed class structures for Salary, Hourly, and Commission employee types, and implemented payroll logic using arrays and ArrayLists. Applied inheritance, encapsulation, constructor overloading, and method overriding.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/Junyong0619/COMP2130-JavaPayroll",
		},

		{
			title: "Ticketing App",
			description:
				"A school project where I built a ticketing system using ASP.NET Core MVC. I learned how to set up CRUD operations, connect to PostgreSQL, and work with Entity Framework. It was challenging but helped me understand how web apps handle data.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png",
			linkText: "View Project",
			link: "https://github.com/Junyong0619/COMP2139-TicketingApp-Portfolio",
		},

		{
			title: "Clinical Management System – Data Modeling",
			description:
				"A data modeling project based on ABC Clinic's requirements. I identified core entities (patients, staff, appointments, visits, tests, payments) and designed Conceptual ERD → Physical ERD → Class Diagram. Learned data normalization, relationship mapping, and resolving M:N relationships.",
			logo: "https://cdn-icons-png.flaticon.com/512/4492/4492311.png",
			linkText: "View Project",
			link: "https://github.com/Junyong0619/COMP2147-ClinicalManagement-DataModeling",
		},

		{
			title: "Student Management System",
			description:
				"A console-based student management system built for COMP2130. Supports creating Undergraduate/Graduate students, storing them in arrays/ArrayList, and displaying students eligible for graduation. Practiced OOP fundamentals like inheritance, aggregation, and method overriding.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/Junyong0619/COMP2130-StudentManagement",
		},
	],
};

export default INFO;
