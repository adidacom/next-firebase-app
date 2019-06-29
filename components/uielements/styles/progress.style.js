import styled from 'styled-components';

const AntProgress = ComponentName => styled(ComponentName)`
  &.ant-progress-line {
    .ant-progress-text {
      text-align: ${props => (props['data-rtl'] === 'rtl' ? 'right' : 'left')};
      margin: ${props => props['data-rtl'] === 'rtl' && '0 8px 0 0'};
    }
  }
`;

export default AntProgress;
