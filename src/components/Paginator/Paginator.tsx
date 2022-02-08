import React, { FC } from 'react';
import { Page, PageCloseButton, PageDescription, Pages } from './Pages';
import { useAppDispatch, useAppSelector } from '../../utils/Hooks';
import { Request } from '../../data/Types';
import { remove, select } from '../../data/slices/PagesSlice';

export const Paginator: FC = () => {
	const data = useAppSelector(state => state.pagination);
	const dispatch = useAppDispatch();

	const onPageClick = (page: Request) => {
		dispatch(select(page.index));
	};

	const removePage = (index: string) => {
		dispatch(remove(index));
	};

	return (
		<Pages>
			{data.pages.map(p => {
				return (
					<Page
						className={data.activePage === p.index ? 'active' : ''}
						key={p.index}
					>
						<PageDescription onClick={() => onPageClick(p)}>
							{p.description}
						</PageDescription>{' '}
						<PageCloseButton onClick={() => removePage(p.index)} />
					</Page>
				);
			})}
		</Pages>
	);
};
