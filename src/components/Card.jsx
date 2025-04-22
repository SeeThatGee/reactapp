import styled from 'styled-components';

export const SwipeCard = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.spacing.medium};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.medium};
  transition: transform 0.5s ease, opacity 0.3s ease; 


  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 300px; 
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 700px; 
  }
`;

export const GreyedOutCard = styled(SwipeCard)`
  background-color: #d3d3d3; 
  pointer-events: none; 
`;

