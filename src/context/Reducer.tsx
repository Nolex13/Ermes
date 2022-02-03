import { Data, Method, Request } from './Data';
import { Action } from './Action';
import { ActionType } from './ActionType';
import { uuid } from '../utils/Uuid';
import { initialState } from './DataContext';

export const reducer = (state: Data = initialState, command: Action): Data => {
	if (command.type === ActionType.ADD_REQUEST) {
		const newUrl: Request = {
			index: uuid(),
			method: Method.GET,
			description: '::a description::',
			url: ':: an url::',
		};
		return { requests: [...state.requests, newUrl] };
	} else if (command.type === ActionType.RENAME_REQUEST) {
		return {
			...state,
			requests: state.requests.map(request => {
				if (request.index === command.index) {
					return { ...request, description: command.newValue };
				} else {
					return request;
				}
			}),
		};
	} else if (command.type === ActionType.DUPLICATE_REQUEST) {
		const requestToDuplicate = state.requests.find(
			request => request.index === command.index,
		);
		if (requestToDuplicate) {
			return {
				...state,
				requests: [
					...state.requests,
					{
						...requestToDuplicate,
						index: uuid(),
						description: `${requestToDuplicate.description} copy`,
					},
				],
			};
		}
	} else if (command.type === ActionType.DELETE_REQUEST) {
		return {
			...state,
			requests: state.requests.filter(
				request => request.index !== command.index,
			),
		};
	}
	return state;
};
