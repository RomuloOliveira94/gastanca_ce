import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: bold;
`;

const Text = styled.span<{
  color: "primary" | "secondary" | "background" | "text";
}>`
  font-size: 32px;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 4px;

  @media (max-width: 720px) {
    font-size: 24px;
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <img src="/icon.png" alt="Logo" width={40} height={40} />
      <Text color="secondary">Gastança</Text>
      <Text color="primary">CE</Text>
    </LogoWrapper>
  );
};

export default Logo;
