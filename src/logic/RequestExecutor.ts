import { Request, ResponseData } from '../data/Types';

export class RequestExecutor {
	executeUsing = (request: Request): Promise<ResponseData> => {
		const serverRequest: ServerRequest = {
			index: request.index,
			url: request.url,
			method: request.method,
			params: request.params.map(param => ({
				key: param.key,
				value: param.value,
			})),
			headers: request.headers.map(header => ({
				key: header.key,
				value: header.value,
			})),
			body: request.body !== null ? JSON.stringify(request.body) : null,
		};
		return fetch('/api//v1/proxy', {
			method: 'POST',
			headers: [['Content-Type', 'application/json']],
			body: JSON.stringify(serverRequest),
		}).then(response => response.json() as Promise<ResponseData>);
	};
}

type ServerRequest = {
	index: string;
	url: string;
	method: string;
	params: KeyValueMapRequest[];
	headers: KeyValueMapRequest[];
	body: string | null;
};

type KeyValueMapRequest = {
	key: string;
	value: string;
};
