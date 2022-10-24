import React, { FC, Props } from 'react';

export interface IHeaderProps extends Props<HTMLElement> {}

const Header: FC<IHeaderProps> = ({}) => {
  return <div>Header</div>;
};

export default Header;
