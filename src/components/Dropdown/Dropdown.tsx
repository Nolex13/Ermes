import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { HiChevronDown } from 'react-icons/hi';
import { VscTriangleUp } from 'react-icons/vsc';

const StyledButton = styled.button`
	background-color: ${props => props.theme.dark4};
	color: ${props => props.theme.light1};
	padding: 8px;
	border: thin solid ${props => props.theme.light2};
	border-radius: 4px 0 4px 0;
	height: 40px;
`;

const DropdownGroup = styled.div`
	background-color: ${props => props.theme.dark3};
	color: ${props => props.theme.light1};
	display: flex;
	flex-direction: column;
	position: absolute;
	z-index: 99;
	top: 110%;
	left: 0;
`;

const DropdownItem = styled.div`
	padding: 8px 16px;

	&:hover {
		background-color: ${props => props.theme.dark4};
		cursor: pointer;
	}
`;

const DropdownArrow = styled(VscTriangleUp)`
	color: ${props => props.theme.dark3};
	position: absolute;
	left: 50%;
	top: -10px;
	transform: translateX(-50%);
`;

const DropdownWrapper = styled.div`
	position: relative;
`;

interface Props {
	initialValue: string;
	items: string[];
}

export const Dropdown: FC<Props> = ({ initialValue, items }) => {
	const [show, setShow] = useState(false);
	const [value, setValue] = useState(initialValue);
	useEffect(() => setValue(initialValue), [initialValue]);

	const onButtonClick = () => () => setShow(!show);

	const onItemClick = (value: string) => {
		setValue(value);
		setShow(false);
	};

	return (
		<DropdownWrapper>
			<StyledButton onClick={onButtonClick()}>
				{value} <HiChevronDown />
			</StyledButton>
			{show && (
				<DropdownGroup>
					<DropdownArrow />
					{items.map(item => (
						<DropdownItem onClick={() => onItemClick(item)} key={item}>
							{item}
						</DropdownItem>
					))}
				</DropdownGroup>
			)}
		</DropdownWrapper>
	);
};
