import { styled } from 'styled-components';

export const DescriptionContainer = styled.p`
  font-weight: 400;
  font-size: 14rem;
  line-height: inherit;
  color: ${({ theme }) => theme.BASE_700};
  text-align: center;
  margin-top: 8rem;
`;
