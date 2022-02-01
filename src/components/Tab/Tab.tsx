import React, { FC } from 'react';

export interface TabProps {
	title: string;
}

export const Tab: FC<TabProps> = ({ children }) => <span>{children}</span>;
