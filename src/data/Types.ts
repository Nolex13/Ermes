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
	params: Param[];
	body: object | null;
};

export type Param = {
	index: string;
	hidden: boolean;
	key: string;
	value: string;
};
