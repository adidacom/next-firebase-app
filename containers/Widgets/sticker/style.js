import styled from 'styled-components';

const StickerWidgetWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  overflow: hidden;

  .isoIconWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0.1);

    i {
      font-size: 30px;
    }
  }

  .isoContentWrapper {
    width: 100%;
    padding: 20px 15px 20px 20px;
    display: flex;
    flex-direction: column;

    .isoStatNumber {
      font-weight: 500;
      line-height: 1.1;
      margin: 0 0 5px;
    }

    .isoLabel {
      font-weight: 400;
      margin: 0;
      line-height: 1.2;
    }
  }
`;

export { StickerWidgetWrapper };
