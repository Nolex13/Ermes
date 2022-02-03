import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Method, Request } from '../Types';
import { uuid } from '../../utils/Uuid';
import { RootState } from '../Store';

const initialState: Request[] = [
	{
		description: 'get order by Id',
		index: '2e119b92-96c6-4f29-b9ae-da6ee1a14c72',
		method: Method.GET,
		url: '/a/random/url/for/example/{{id}}',
	},
	{
		description: 'get document by Id',
		index: '2e119b92-96c6-4f29-b9ae-6969696',
		method: Method.POST,
		url: ':: an url::',
	},
];

type UpdateAction = PayloadAction<{
	index: string;
	newValue: Request;
}>;

type DeleteAction = PayloadAction<{ index: string }>;

type DuplicateAction = PayloadAction<{ index: string }>;

export const RequestSlice = createSlice({
	name: 'requests',
	initialState,
	reducers: {
		add: state => {
			return [
				...state,
				{
					index: uuid(),
					method: Method.GET,
					url: '::an url::',
					description: '::a description::',
				},
			];
		},
		update: (state, action: UpdateAction) => {
			return state.map((r: Request) =>
				r.index === action.payload.index ? action.payload.newValue : r,
			);
		},
		remove: (state, action: DeleteAction) => {
			return state.filter(r => r.index !== action.payload.index);
		},
		duplicate: (state, action: DuplicateAction) => {
			const requestToClone: Request = state.filter(
				r => r.index === action.payload.index,
			)[0];
			return [
				...state,
				{
					...requestToClone,
					description: `${requestToClone.description} copy`,
					index: uuid(),
				},
			];
		},
	},
});

export const { update, remove, duplicate, add } = RequestSlice.actions;

export const requestsReducer = RequestSlice.reducer;

export const getRequestBy = (state: RootState, index: string): Request =>
	state.requests.filter(p => p.index === index)[0];
