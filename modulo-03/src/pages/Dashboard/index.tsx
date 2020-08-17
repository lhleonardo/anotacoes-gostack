/* eslint-disable camelcase */
import React, { useState, FormEvent, useEffect } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Repository, Error } from './styles';

import logo from '../../assets/logo-app.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;

  owner: {
    avatar_url: string;
    login: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositoryInput, setRepositoryInput] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const savedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (savedRepositories) {
      return JSON.parse(savedRepositories);
    }

    return [];
  });

  const [error, setError] = useState('');

  useEffect(() => {
    const parsedRepositories = JSON.stringify(repositories);
    localStorage.setItem('@GithubExplorer:repositories', parsedRepositories);
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!repositoryInput) {
      setError('Digite o campo acima no formato user/repo.');
      return;
    }

    try {
      const response = await api.get(`/repos/${repositoryInput}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);
      setRepositoryInput('');
      setError('');
    } catch {
      setError('Oops. Não foi possivel encontrar.');
    }
  }

  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub.</Title>

      <Form hasError={!!error} onSubmit={handleAddRepository}>
        <input
          onChange={event => setRepositoryInput(event.target.value)}
          value={repositoryInput}
          placeholder="Digite o repositório do GitHub"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {error && <Error>{error}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Repository
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div className="info">
              <strong className="repo-title">{repository.full_name}</strong>
              <p className="repo-description">{repository.description}</p>
            </div>
            <FiChevronRight size={30} />
          </Repository>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
