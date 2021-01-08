import React from 'react';
import { Spinner } from 'react-bootstrap';
import './_style.scss';

export const Loader: React.FC = () => {
  return (
    <section className="loader">
      <Spinner animation="border" role="status" variant="info" />
    </section>
  );
};
