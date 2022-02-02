import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import 'jsoneditor/dist/jsoneditor.css';
import JSONEditor from 'jsoneditor';

const StyledJsonEditor = styled.div`
	& .jsoneditor {
		border: none;
	}

	& .jsoneditor-menu {
		background-color: ${p => p.theme.dark4};
		border: none;
	}
`;

const JsonEditor: FC = () => {
	let container: HTMLElement | null = null;
	let editor: JSONEditor | null = null;

	useEffect(() => {
		container = document.getElementById('jsoneditor');
		if (container != null && editor === null) {
			editor = new JSONEditor(container, {
				history: true,
				mode: 'code',
				onChange: () => {
					try {
						console.log(editor?.get());
					} catch (e) {
						//
					}
				},
			});
		}
	});

	return <StyledJsonEditor id="jsoneditor" />;
};

export const BodyTab: FC = () => <JsonEditor />;
