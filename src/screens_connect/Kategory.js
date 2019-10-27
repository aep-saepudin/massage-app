import { connect } from 'react-redux';
import { compose } from 'redux';

import { gotoShowLocation } from '../actions/ActionCreators';
import Kategory from '../../screens/Kategori';
import WrapperWithListening from '../screens/hoc/ListenPesanan';


const mapStateToProps = (state) => ({
  user_id: 'u1',
});

const mapDispatchToProps = {
  onChangeEvent: (res) => gotoShowLocation(res),
};


const composedeWithListening = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WrapperWithListening,
);

export default composedeWithListening(Kategory);