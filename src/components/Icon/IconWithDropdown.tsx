import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons/lib/cjs/iconBase';
import styled from 'styled-components';

interface Props {
	icon: ReactElement<IconBaseProps>;
	children: ReactElement<IconDropdownElementProps>[];
}

interface IconDropdownElementProps {
	onClick: () => void;
	icon: ReactElement<IconBaseProps>;
}

const IconDropdownElementWrapper = styled.div`
	padding: 8px 16px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	cursor: pointer;
`;

export const IconDropdownElement: FC<IconDropdownElementProps> = ({
	onClick,
	icon,
	children,
}) => (
	<IconDropdownElementWrapper onClick={onClick}>
		{icon} {children}
	</IconDropdownElementWrapper>
);

const IconWrapper = styled.div`
	position: relative;
`;

const DropdownElements = styled.div`
	position: absolute;
	background-color: ${p => p.theme.dark2};
	z-index: 99;
	left: 140%;
	top: 0;
`;

export const IconWithDropdown: FC<Props> = ({ icon, children }) => {
	const [show, setShow] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setShow(false);
			}
		};
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);
	return (
		<IconWrapper ref={ref}>
			<span onClick={() => setShow(!show)}>{icon}</span>
			{show && <DropdownElements>{children}</DropdownElements>}
		</IconWrapper>
	);
};
