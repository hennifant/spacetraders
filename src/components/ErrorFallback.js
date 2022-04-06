import styled from 'styled-components';

export default function ErrorFallback({ error }) {
  return (
    <Wrapper>
      <h1>Error occured:</h1>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </Wrapper>
  );
}

const Wrapper = styled.div.attrs(() => ({ role: 'alert' }))`
  padding: 20px;
  border: 1px doted red;
  border-radius: 10px;
`;
