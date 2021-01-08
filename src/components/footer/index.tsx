import React from 'react';
import './_style.scss';

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footerContainer">
      <div className="companyNameFooter">
        AwesomeCompanyName
      </div>
      <div className="copyright">
        <p>Здесь мог бы быть Copyright</p>
      </div>
    </div>
  </footer>
);
