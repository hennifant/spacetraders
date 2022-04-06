import styled from 'styled-components';
import PropTypes from 'prop-types';

Status.propTypes = {
  isGreen: PropTypes.bool,
};

export default function Status({ isGreen = false, something }) {
  if (isGreen) {
    something.callANonExistingFunction();
  }
  return (
    <Wrapper>
      Status:{''}
      <StatusCircle isGreen={isGreen}>
        <span className="sr-only">{isGreen ? 'green' : 'red'}</span>
      </StatusCircle>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: red;
`;

const StatusCircle = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${props => (props.isGreen ? 'green' : 'crimson')};
  border-radius: 50%;
`;
