import { compose } from 'redux';
import WithData from './withData';
import WithLayout from './withLayout';

export default compose(
  WithData,
  WithLayout
);
