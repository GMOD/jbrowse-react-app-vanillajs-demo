/* global JBrowseReactApp React, ReactDOM */
import config from './config.js'

const { createViewState, JBrowseApp } = window.JBrowseReactApp

const viewState = createViewState({
  config,
})

ReactDOM.render(
  React.createElement(JBrowseApp, { viewState }),
  document.getElementById('jbrowse_app'),
)
