import styled from '@emotion/styled';
import React from 'react';

interface LogoProps {
  src: string;
  alt?: string;
}
const StyledLogo = styled.img`
  width: 200px;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
`;
const Logo: React.FC<LogoProps> = ({ src, alt = 'Logo' }) => (
  <StyledLogo src={src} alt={alt} />
);

export default Logo;
