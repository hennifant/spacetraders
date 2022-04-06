import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <nav>
      <LinkButton to="/">User Status</LinkButton>
      <LinkButton to="/ships">Available Ships</LinkButton>
      <LinkButton to="/market">Marketplace</LinkButton>
    </nav>
  );
}

const LinkButton = styled(NavLink)`
  padding: 4px 12px;
  border: 2px solid #ddd;
  background-color: green;
  text-decoration: none;
  color: black;
  border-radius: 6px;

  &.active {
    background-color: yellow;
  }
`;
