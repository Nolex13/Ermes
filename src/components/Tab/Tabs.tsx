import React, { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { TabProps } from './Tab';

const TabsHeader = styled.ul`
	color: ${p => p.theme.light1};
	list-style-type: none;
	display: flex;
	flex-direction: row;
	padding: 0;

	& li {
		padding: 0 8px 8px 8px;
		margin: 0 8px;
		cursor: pointer;

		&.active {
			border-bottom: 2px solid ${p => p.theme.light1};
		}
	}
`;

const TabBody = styled.div`
	color: ${p => p.theme.light1};
	margin-top: 32px;
`;

const TabWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

interface Props {
	children: ReactElement<TabProps>[];
}

export const Tabs: FC<Props> = ({ children }) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<TabWrapper>
			<TabsHeader>
				{children.map((tab, index) => (
					<li
						className={index === activeTab ? 'active' : ''}
						onClick={() => setActiveTab(index)}
						key={tab.props.title}
					>
						{tab.props.title}
					</li>
				))}
			</TabsHeader>
			<TabBody>{children[activeTab]}</TabBody>
		</TabWrapper>
	);
};
