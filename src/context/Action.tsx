import { ActionType } from './ActionType';

type AddRequestAction = {
	type: ActionType.ADD_REQUEST;
};
type RenameRequestAction = {
	type: ActionType.RENAME_REQUEST;
	index: string;
	newValue: string;
};
type DuplicateRequestAction = {
	type: ActionType.DUPLICATE_REQUEST;
	index: string;
};
type DeleteRequestAction = {
	type: ActionType.DELETE_REQUEST;
	index: string;
};

export type Action =
	| AddRequestAction
	| RenameRequestAction
	| DuplicateRequestAction
	| DeleteRequestAction;
