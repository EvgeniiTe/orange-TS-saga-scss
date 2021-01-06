import React from 'react';
import Alert from 'react-bootstrap/Alert';

interface Props {
  error: string | null;
}

export const ErrorIndicator: React.FC<Props> = ({ error }: Props) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        {error}
      </p>
    </Alert>
  );
};
