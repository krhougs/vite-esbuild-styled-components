import * as styled from 'styled-components'

const css = styled.css.withConfig({ componentId: 'test-namespace__sc-1bkf1vx-0', displayName: 'code__css' })`
  background: black;
`

const GlobalStyle = styled.createGlobalStyle.withConfig({ componentId: 'test-namespace__sc-1bkf1vx-1', displayName: 'code__GlobalStyle' })`
  html {
    background: black;
  }
`

const Test = styled.default.div.withConfig({ componentId: 'test-namespace__sc-1bkf1vx-2', displayName: 'code__Test' })`
  color: red;
`

const before = styled.default.div.withConfig({ componentId: 'test-namespace__sc-1bkf1vx-3', displayName: 'code__before' })`
  color: blue;
`

styled.default.div.withConfig({ componentId: 'test-namespace__sc-1bkf1vx-4', displayName: 'code' })``

export default styled.default.button.withConfig({ componentId: 'test-namespace__sc-1bkf1vx-5', displayName: 'code' })``

