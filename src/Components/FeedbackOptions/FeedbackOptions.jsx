import { Button, List } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<List>
			{options.map(option => (
				<li key={option}>
					<Button type="button" name={option} onClick={onLeaveFeedback}>{option}</Button>
				</li>
			))}
		</List>
	);
};