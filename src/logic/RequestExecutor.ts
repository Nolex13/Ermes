import { Method, Request } from '../data/Types';

export class RequestExecutor {
	executeUsing = (request: Request): Promise<Response> => {
		if (request.method === Method.GET) return this.fetchGET(request);
		else return this.fetch(request);
	};

	private fetchGET = (request: Request): Promise<Response> => {
		console.log('request', {
			method: 'GET',
			headers: request.header.map(h => [h.key, h.value]),
		});
		return fetch(request.url, {
			method: 'GET',
			headers: request.header.map(h => [h.key, h.value]),
		});
	};

	private fetch = (request: Request): Promise<Response> =>
		fetch(request.url, {
			method: 'GET',
			headers: request.header.map(h => [h.key, h.value]),
			body: JSON.stringify(request.body),
		});
}
