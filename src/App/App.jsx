import { Component } from "react";

import { Section } from "Components/Section/Section";
import { FeedbackOptions } from "Components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "Components/Statistics/Statistics";
import { Notification } from "Components/Notification/Notification";

const buttons = [
	{ id: "good", title: "Good" },
	{ id: "neutral", title: "Neutral" },
	{ id: "bad", title: "Bad" }
];

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	}

	handleClickFeedback = e => {
		const { name } = e.target;
		this.setState(prevState => ({ [name]: prevState[name] + 1 }));
	};

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		return good + neutral + bad;
	};

	countPositiveFeedbackPercentage = () => {
		return this.countTotalFeedback()
			? Math.round((this.state.good * 100) / this.countTotalFeedback())
			: 0;
	};

	render() {
		const { good, neutral, bad } = this.state;
		const totalFeedback = this.countTotalFeedback();
		const totalPercentage = this.countPositiveFeedbackPercentage();

		return (
			<div className="container">
				<Section title={"Please leave feedback"}>
					<FeedbackOptions
						options={buttons}
						onLeaveFeedback={this.handleClickFeedback}
					/>
				</Section>
				<Section title={"Statistics"}>
					{totalFeedback > 0 ? (
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={totalFeedback}
							positivePercentage={totalPercentage}
						/>
					) : (
						<Notification message={"There is no feedback"} />
					)}
				</Section>
			</div>
		);
	}
};
