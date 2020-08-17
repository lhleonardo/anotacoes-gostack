/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, Info, Statistics, Statistic, Issues, Issue } from './styles';

import logo from '../../assets/logo-app.svg';
import leonardo from '../../assets/leonardo.jpg';
import api from '../../services/api';

interface RouteParams {
  repository: string;
}

interface RepositoryType {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };

  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface IssueType {
  id: number;
  html_url: string;
  title: string;

  user: { login: string };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RouteParams>();

  const [repository, setRepository] = useState<RepositoryType | null>(null);
  const [issues, setIssues] = useState<IssueType[]>([]);

  useEffect(() => {
    api
      .get<RepositoryType>(`/repos/${params.repository}`)
      .then(response => setRepository(response.data));
    api
      .get<IssueType[]>(`/repos/${params.repository}/issues`)
      .then(response => setIssues(response.data));
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={25} color="#A8A8B3" />
          Voltar
        </Link>
      </Header>

      {repository && (
        <>
          <Info>
            <img
              src={repository.owner.avatar_url}
              alt={`Foto de ${repository.owner.login}`}
            />

            <div className="description">
              <strong>{repository.full_name}</strong>
              <span>{repository.description}</span>
            </div>
          </Info>

          <Statistics>
            <Statistic>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </Statistic>
            <Statistic>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </Statistic>
            <Statistic>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </Statistic>
          </Statistics>
        </>
      )}

      <Issues>
        {issues.map(issue => (
          <Issue key={issue.id} href={issue.html_url}>
            <div className="info">
              <strong>{issue.title}</strong>
              <span>{issue.user.login}</span>
            </div>

            <FiChevronRight size={30} color="#CBCBD6" />
          </Issue>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
