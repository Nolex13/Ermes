import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../utils/Hooks';
import { select } from '../../data/slices/EnvironmentSlice';

const Dropdown = styled.strong`
	cursor: pointer;
`;

const DropdownElements = styled.ul`
	background-color: ${p => p.theme.dark4};
	position: absolute;
	top: 110%;
	right: 0;

	& li {
		margin: 0;
		padding: 8px 16px;
		list-style-type: none;
		cursor: pointer;

		&.customize {
			border-top: thin solid ${p => p.theme.light2};
			font-size: 0.9em;
			white-space: nowrap;
			background-color: ${p => p.theme.dark1};
		}

		&:hover {
			background-color: ${p => p.theme.dark5};
		}
	}
`;

const EnvironmentSelectorWrapper = styled.div`
	position: relative;
`;

export const EnvironmentSelector: FC = () => {
	const environments = useAppSelector(state => state.environment);
	const dispatch = useAppDispatch();

	const [show, setShow] = useState(false);
	const onClick = () => setShow(!show);

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

	const onEnvironmentSelect = (environment: string) => {
		dispatch(select(environment));
		setShow(false);
	};

	return (
		<EnvironmentSelectorWrapper ref={ref}>
			<span>Environment: </span>
			<Dropdown onClick={onClick}>{environments.selected}</Dropdown>
			{show && (
				<DropdownElements>
					{environments.available
						.filter(e => e !== environments.selected)
						.map(e => (
							<li key={e} onClick={() => onEnvironmentSelect(e)}>
								{e}
							</li>
						))}
					<li className="customize">Customize environments</li>
				</DropdownElements>
			)}
		</EnvironmentSelectorWrapper>
	);
};
