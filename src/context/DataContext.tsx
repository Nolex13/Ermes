import React, { createContext, FC, useReducer } from 'react';
import { Data } from './Data';
import { Action } from './Action';
import { reducer } from './Reducer';

export const initialState: Data = { requests: [] };

export const DataContext = createContext<{
	state: Data;
	dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const DataProvider: FC = ({ children }) => {
	const [globalState, dispatch] = useReducer(reducer, initialState);

	if (globalState) {
		return (
			<DataContext.Provider value={{ state: globalState, dispatch: dispatch }}>
				{children}
			</DataContext.Provider>
		);
	} else {
		return <span>Loading</span>;
	}
};
