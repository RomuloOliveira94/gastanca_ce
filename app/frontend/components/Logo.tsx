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
`;

const Text = styled.span<{ color: string }>`
  font-size: 32px;
  color: ${({ color }) => color};
  margin-left: 4px;
`;

const Logo = () => (
  <LogoWrapper>
    <Icon>$</Icon>
    <Text color="#f39c12">Gastança</Text>
    <Text color="#3498db">CE</Text>
  </LogoWrapper>
);

export default Logo;
