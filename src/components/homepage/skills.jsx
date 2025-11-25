import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/skills.css";

const Skills = () => {
	const skillCategories = [
		{
			title: "Languages",
			skills: ["PHP", "Java", "C#", "JavaScript", "SQL", "HTML", "CSS"]
		},
		{
			title: "Frameworks & Tools",
			skills: ["ASP.NET MVC", "Entity Framework Core", "Razor Pages", "JavaFX", "Tailwind CSS", "Git/GitHub"]
		},
		{
			title: "Databases",
			skills: ["PostgreSQL (Npgsql)", "MySQL"]
		},
		{
			title: "Concepts",
			skills: ["OOP", "MVC Architecture", "REST Principles", "CRUD Design", "Database Modeling", "Form Validation", "Session/Authentication"]
		}
	];

	return (
		<div className="skills">
			<Card
				icon={faCode}
				title="Technical Skills"
				body={
					<div className="skills-body">
						{skillCategories.map((category, index) => (
							<div className="skill-category" key={index}>
								<div className="skill-category-title">{category.title}</div>
								<div className="skill-tags">
									{category.skills.map((skill, skillIndex) => (
										<span className="skill-tag" key={skillIndex}>
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Skills;
