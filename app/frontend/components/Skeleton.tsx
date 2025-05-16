import styled, { keyframes } from "styled-components";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
  className?: string;
}

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const SkeletonBox = styled.div<SkeletonProps>`
  display: inline-block;
  background: #d1d0d0;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "1em"};
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

export default function Skeleton({
  width,
  height,
  borderRadius,
  style,
  className,
}: SkeletonProps) {
  return (
    <SkeletonBox
      width={width}
      height={height}
      borderRadius={borderRadius}
      style={style}
      className={className}
    />
  );
}
