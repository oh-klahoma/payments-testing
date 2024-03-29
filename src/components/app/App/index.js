import { connect } from 'react-redux'

import appSelectors from 'store/app/selectors'

import Component from './component'

const mapStateToProps = state => ({
  isLogged: appSelectors.getIsLogged(state)
})

export default connect(
  mapStateToProps,
)(Component)
