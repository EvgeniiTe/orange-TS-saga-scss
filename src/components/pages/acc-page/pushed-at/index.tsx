import React from 'react';

interface Props {
  pushedAt?: string;
}

export const PushedAt: React.FC<Props> = ({ pushedAt = '00000000000000000000' }: Props) => {
  const pushedYear = pushedAt.slice(0, 4);
  const pushedMonth = pushedAt.slice(5, 7);
  const pushedDay = pushedAt.slice(8, 10);
  const pushedAtData = `${pushedDay}.${pushedMonth}.${pushedYear}`;
  const pushedAtTime = pushedAt.slice(11, 19);
  return (
    <div style={{ display: 'flex' }}>
      <p>{pushedAtData}</p>
      <p>{pushedAtTime}</p>
    </div>
  );
};

PushedAt.defaultProps = { pushedAt: '00000000000000000000' };
