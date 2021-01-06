import React from 'react';

import { ServiceConsumer } from '../service-context';

export const withApiRequest = () => (Wrapped: any) => {
  return (props: any) => {
    return (
      <ServiceConsumer>
        {(serviceFunctions) => {
          return <Wrapped {...props} serviceFunctions={serviceFunctions} />;
        }}
      </ServiceConsumer>
    );
  };
};
