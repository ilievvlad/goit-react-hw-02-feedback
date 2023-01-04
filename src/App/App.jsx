import { Component } from "react";

import { Section } from "../Components/Section/Section";
import { FeedbackOptions } from "../Components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "../Components/Statistics/Statistics";

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	}

	handleClickFeedback = e => {
		const { name } = e.target;
		this.setState(prevState => ({ [name]: prevState[name] + 1 }));
		console.log(name)
	};

	render() {
		const { good, neutral, bad } = this.state;

		return (
			<div className="container">
				<Section title={"Please leave feedback"}>
					<FeedbackOptions
						options={["Good", "Neutral", "Bad"]}
						onLeaveFeedback={this.handleClickFeedback}
					/>
				</Section>
				<Section title={"Statistics"}>
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={4}
						positivePercentage={5}
					/>
				</Section>
			</div>
		);
	}
};
