import React, { FC, useEffect } from 'react';
import JSONEditor from 'jsoneditor';
import styled from 'styled-components';

const StyledJsonEditor = styled.div`
	& .jsoneditor {
		border: none;
	}

	& .jsoneditor-menu {
		background-color: ${p => p.theme.dark4};
		border: none;
	}
`;

interface Props {
	initialValue: object | null;
	onChange: (value: object | null) => void;
}

export const JsonEditor: FC<Props> = ({ initialValue, onChange }) => {
	let editor: JSONEditor | null = null;

	useEffect(() => {
		const container = document.getElementById('jsoneditor');
		if (container !== null && editor === null) {
			editor = new JSONEditor(container, {
				history: true,
				mode: 'code',
				onChange: () => {
					try {
						onChange(editor?.get());
					} catch (e) {
						//
					}
				},
			});
			if (initialValue !== null) {
				editor.set(initialValue);
			}
		}
	}, [editor]);

	return <StyledJsonEditor id="jsoneditor" />;
};
