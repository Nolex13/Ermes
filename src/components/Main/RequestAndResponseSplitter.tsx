import React, { FC } from 'react';
import { Request } from '../../data/Types';
import { useAppSelector } from '../../utils/Hooks';
import { RequestBody } from '../Request/RequestBody';
import styled from 'styled-components';
import { ResponseBody } from '../Reponse/ResponseBody';

const Splitter = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;

	& div {
		flex: 1;
	}
`;

export const RequestAndResponseSplitter: FC<{ request: Request }> = ({
	request,
}) => {
	const response = useAppSelector(state => state.response);
	if (response.loading || response.data !== null) {
		return (
			<Splitter>
				<RequestBody request={request} />
				<ResponseBody response={response} />
			</Splitter>
		);
	} else {
		return <RequestBody request={request} />;
	}
};
