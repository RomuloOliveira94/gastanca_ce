import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: 100rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export default Container;
