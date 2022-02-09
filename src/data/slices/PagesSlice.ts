import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Request } from '../Types';

type PaginationType = {
	pages: Request[];
	activePage: string;
};

const initialState: PaginationType = {
	pages: [],
	activePage: '',
};

const getActivePageUsing = (pages: Request[]): string => {
	if (pages.length > 0) {
		return pages[0].index;
	} else {
		return '';
	}
};

export const PagesSlice = createSlice({
	name: 'pages',
	initialState,
	reducers: {
		add: (state, { payload }: PayloadAction<Request>) => {
			const index = state.pages.findIndex(p => p.index === payload.index);
			if (index === -1) {
				return {
					...state,
					pages: [...state.pages, payload],
					activePage: payload.index,
				};
			} else {
				return {
					...state,
					activePage: payload.index,
				};
			}
		},
		select: (state, { payload }: PayloadAction<string>) => {
			return {
				...state,
				activePage: payload,
			};
		},
		removePage: (state, { payload }: PayloadAction<string>) => {
			const pages = state.pages.filter(r => r.index !== payload);
			return {
				...state,
				pages: pages,
				activePage: getActivePageUsing(pages),
			};
		},
	},
});

export const { removePage, add, select } = PagesSlice.actions;

export const pagesReducer = PagesSlice.reducer;

export const getActivePage = (pagination: PaginationType) =>
	pagination.pages.filter(p => p.index === pagination.activePage)[0];
