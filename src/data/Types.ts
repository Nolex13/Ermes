export enum Method {
	POST = 'POST',
	GET = 'GET',
	PUT = 'PUT',
	DELETE = 'DELETE',
	OPTION = 'OPTION',
}

export type Request = {
	index: string;
	method: Method;
	description: string;
	url: string;
	params: KeyValueMap[];
	header: KeyValueMap[];
	body: object | null;
};

export type ResponseData = {
	index: string;
	responseStatus: number;
	header: KeyValueMap[];
	body: object | null;
};

export type Response = {
	loading: boolean;
	data: ResponseData | null;
};

export type KeyValueMap = {
	index: string;
	hidden: boolean;
	key: string;
	value: string;
};
