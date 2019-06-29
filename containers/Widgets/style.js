import styled from 'styled-components';
import { palette } from 'styled-theme';

const WidgetWrapper = styled.div`
  margin: 0 10px;

  @media only screen and (max-width: 767) {
    margin-right: 0 !important;
  }
`;

const WidgetBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid ${palette('border', 2)};

  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;

const WidgetColumn = styled.div`
  align-content: flex-start;
`;

export { WidgetWrapper, WidgetBox, WidgetColumn };
