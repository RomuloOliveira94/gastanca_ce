import styled from "styled-components";
import Container from "./layout/Container";
import Logo from "./Logo";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.background || "#fff"};
  color: ${({ theme }) => theme.colors.text || "#222"};
  box-shadow: ${({ theme }) =>
    theme.mode === "light" && "0 4px 12px rgba(0, 0, 0, 0.034)"};
  border-bottom: ${({ theme }) =>
    theme.mode === "dark" && "1px solid rgba(255, 255, 255, 0.1)"};
`;

const NavBar = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  color: inherit;
  transition: color 0.2s;
`;

type HeaderProps = {
  themeMode: "light" | "dark";
  toggleTheme: () => void;
};

const Header = ({ themeMode, toggleTheme }: HeaderProps) => (
  <HeaderContainer>
    <NavBar>
      <Logo />
      <ThemeButton
        aria-label={
          themeMode === "light" ? "Ativar tema escuro" : "Ativar tema claro"
        }
        onClick={toggleTheme}
      >
        {themeMode === "light" ? (
          <span role="img" aria-label="Lua">
            🌙
          </span>
        ) : (
          <span role="img" aria-label="Sol">
            ☀️
          </span>
        )}
      </ThemeButton>
    </NavBar>
  </HeaderContainer>
);

export default Header;
