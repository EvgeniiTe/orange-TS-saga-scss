import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Header } from '../header';
import { Footer } from '../footer';
import { HomePage, AccPage, RepoPage } from '../pages';
import './_style.scss';

export const App: React.FC = () => (
  <Container fluid className="app">
    <Header />
    <main className="contentContainer">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/:user" component={AccPage} exact />
        <Route path="/:user/:repo" component={RepoPage} />
      </Switch>
    </main>
    <Footer />
  </Container>
);
