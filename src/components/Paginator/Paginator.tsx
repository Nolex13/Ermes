import React, { FC } from 'react';
import { Page, PageCloseButton, PageDescription, Pages } from './Pages';
import { useAppDispatch, useAppSelector } from '../../utils/Hooks';
import { Request } from '../../data/Types';
import { removePage, select } from '../../data/slices/PagesSlice';

export const Paginator: FC = () => {
	const data = useAppSelector(state => state.pagination);
	const dispatch = useAppDispatch();

	const onPageClick = (page: Request) => {
		dispatch(select(page.index));
	};

	const onRemovePage = (index: string) => {
		dispatch(removePage(index));
	};

	const onTabClick = (e: React.MouseEvent<HTMLLIElement>, index: string) => {
		if (e.nativeEvent.button === 1) {
			onRemovePage(index);
		}
	};

	return (
		<Pages>
			{data.pages.map(p => {
				return (
					<Page
						className={data.activePage === p.index ? 'active' : ''}
						onMouseDown={e => onTabClick(e, p.index)}
						key={p.index}
					>
						<PageDescription onClick={() => onPageClick(p)}>
							{p.description}
						</PageDescription>{' '}
						<PageCloseButton onClick={() => onRemovePage(p.index)} />
					</Page>
				);
			})}
		</Pages>
	);
};
