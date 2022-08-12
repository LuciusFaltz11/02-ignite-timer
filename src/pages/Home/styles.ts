import styled from 'styled-components';

export const HomeContainer = styled.main`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 14.5rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const BaseCountdownButton = styled.button`
  width: 100%;

  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['gray-100']};
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s background ease-in-out;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme['green-700']};
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme['green-700']};
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:hover:not(:disabled) {
    background: ${(props) => props.theme['red-700']};
  }
`;
