import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faGraduationCap}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="/gbc-logo.png"
								alt="George Brown College"
								className="work-image"
							/>
							<div className="work-title">George Brown College</div>
							<div className="work-subtitle">
								Computer Programming & Analysis
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="/sgic-logo.png"
								alt="SGIC"
								className="work-image"
							/>
							<div className="work-title">ST. George International College</div>
							<div className="work-subtitle">
								English Language Advanced
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
