import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Request } from '../Types';

type EnvironmentType = {
	selected: string;
	available: string[];
};

const initialState: EnvironmentType = {
	selected: 'localhost',
	available: ['localhost', 'QA', 'preview', 'production'],
};

export const PagesSlice = createSlice({
	name: 'environment',
	initialState,
	reducers: {
		select: (state, { payload }: PayloadAction<string>) => {
			return {
				...state,
				selected: payload,
			};
		},
	},
});

export const { select } = PagesSlice.actions;

export const environmentReducer = PagesSlice.reducer;
