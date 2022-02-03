export type Data = {
	requests: Request[];
};

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
};
