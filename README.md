Repro for https://github.com/reduxjs/react-redux/issues/1194
- Created using create react app
- To see the repro do following
  - yarn install
  - yarn run start
  - notice that reducer does not return undefined and returns 0 for the counter value
  - but even then mapStateToProps in Counter.js get the store state as {} instead of {counter:0}
