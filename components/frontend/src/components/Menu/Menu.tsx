import React from "react";
// @ts-ignore
import { Header, HeaderNav, HeaderNavItem } from "agnostic-react";
import { Link } from "react-router-dom";

export const Menu: React.FC = () => {
  return (
    <Header isHeaderContentStart>
      <>
        Graphql gateway frontend
        <HeaderNav css="header-flex-fill">
          <HeaderNavItem>
            <Link to="/airports">Airports</Link>
          </HeaderNavItem>
        </HeaderNav>
      </>
    </Header>
  );
};
