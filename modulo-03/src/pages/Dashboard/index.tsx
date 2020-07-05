import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Repository } from './styles';

import logo from '../../assets/logo-app.svg';
import person from '../../assets/leonardo.jpg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub.</Title>

      <Form>
        <input placeholder="Digite o repositório do GitHub" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <Repository href="teste">
          <img src={person} alt="Person" />
          <div className="info">
            <strong className="repo-title">rocketseat/unform</strong>
            <p className="repo-description">Descrição do repositório</p>
          </div>
          <FiChevronRight size={30} />
        </Repository>
        <Repository href="teste">
          <img src={person} alt="Person" />
          <div className="info">
            <strong className="repo-title">rocketseat/unform</strong>
            <p className="repo-description">Descrição do repositório</p>
          </div>
          <FiChevronRight size={30} />
        </Repository>
        <Repository href="teste">
          <img src={person} alt="Person" />
          <div className="info">
            <strong className="repo-title">rocketseat/unform</strong>
            <p className="repo-description">Descrição do repositório</p>
          </div>
          <FiChevronRight size={30} />
        </Repository>
      </Repositories>
    </>
  );
};

export default Dashboard;
