import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Response, ResponseData } from '../Types';

const initialState: Response = {
	loading: false,
	data: null,
};

export const ResponseSlice = createSlice({
	name: 'response',
	initialState,
	reducers: {
		setData: (state, { payload }: PayloadAction<ResponseData>) => {
			return { ...state, data: payload };
		},
		setLoading: (state, { payload }: PayloadAction<boolean>) => {
			return { ...state, loading: payload };
		},
	},
});

export const { setData, setLoading } = ResponseSlice.actions;

export const responseReducer = ResponseSlice.reducer;
