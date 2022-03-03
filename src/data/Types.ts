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
	headers: KeyValueMap[];
	body: object | null;
};

export type ResponseData = {
	index: string;
	status: ResponseStatus;
	header: KeyValueMap[];
	body: object | null;
};

export type ResponseStatus = {
	description: string;
	value: number;
	series: HttpStatusSeries;
	reason: string;
};

enum HttpStatusSeries {
	INFORMATIONAL = 'INFORMATIONAL',
	SUCCESSFUL = 'SUCCESSFUL',
	REDIRECTION = 'REDIRECTION',
	CLIENT_ERROR = 'CLIENT_ERROR',
	SERVER_ERROR = 'SERVER_ERROR',
}

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
