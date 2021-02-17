import { CSSProperties } from 'react';

type Props = {
  name: string;
};

export const Hello = ({ name }: Props) => {
  const style: CSSProperties = {
    color: 'red'
  };
  return <h1 style={style}>Hello {name}</h1>;
};