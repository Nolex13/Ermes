import React, { FC } from 'react';
import { Response } from '../../data/Types';
import { Row } from '../Row/Row';
import styled from 'styled-components';

interface Props {
	response: Response;
}

const ResponseBodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ResponseBody: FC<Props> = ({ response }) => (
	<ResponseBodyWrapper>
		<Row>{JSON.stringify(response)}</Row>
	</ResponseBodyWrapper>
);
