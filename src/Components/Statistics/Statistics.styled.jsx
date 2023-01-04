import styled from 'styled-components';

export const List = styled.ul`
	padding-left: 50px;
`;

export const Item = styled.li`
	font-weight: 600;
	font-size: 18px;
	line-height: 1.3;
	color: var(--gray);
	&:not(:last-child) {
		margin-bottom: 10px;
	}
`;