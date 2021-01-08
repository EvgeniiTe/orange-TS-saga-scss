import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './_style.scss';

interface Props {
  onlyHome?: boolean;
  ownerLogin?: string | unknown;
}

export const ControlPanel: React.FC<Props> = ({ onlyHome, ownerLogin }: Props) => {
  const ownerAccPage = `/${ownerLogin}`;
  if (onlyHome) {
    return (
      <div className="controlPanel">
        <Link to="/"><Button variant="primary">HOME</Button></Link>
      </div>
    );
  }
  return (
    <div className="controlPanel">
      <Link to="/"><Button variant="primary">HOME</Button></Link>
      <Link to={ownerAccPage}><Button variant="primary">REPOS LIST</Button></Link>
    </div>
  );
};

ControlPanel.defaultProps = { onlyHome: false, ownerLogin: undefined };
