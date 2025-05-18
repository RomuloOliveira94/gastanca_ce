import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-weight: bold;
`;

const Icon = styled.div`
  background: #2ecc71;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 720px) {
    font-size: 28px;
    width: 36px;
    height: 36px;
  }
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
      <Icon>$</Icon>
      <Text color="secondary">Gastança</Text>
      <Text color="primary">CE</Text>
    </LogoWrapper>
  );
};

export default Logo;
