import { Request } from '../data/Types';

export class RequestExecutor {
	executeUsing = (request: Request): Promise<Response> => {
		const serverRequest: ServerRequest = {
			index: request.index,
			url: request.url,
			method: request.method,
		};
		return fetch('/api//v1/proxy', {
			method: 'POST',
			headers: request.header.map(h => [h.key, h.value]),
			body: JSON.stringify(serverRequest),
		});
	};
}

type ServerRequest = {
	index: string;
	url: string;
	method: string;
};
