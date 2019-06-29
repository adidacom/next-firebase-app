import { compose } from 'redux';
import WithData from './withData';
import WithLayout from './withLayout';
import WithLang from '../withLang';

// export default compose(withReduxSaga, WithData, WithLayout, WithLang);
export default compose(
  WithData,
  WithLayout,
  WithLang
);
