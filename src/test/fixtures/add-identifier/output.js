import styled from 'styled-components'

const Test = styled.div.withConfig({ componentId: 'sc-etn1et-0' })`
  width: 100%;
`
const Test2 = true ? styled.div.withConfig({ componentId: 'sc-etn1et-1' })`` : styled.div.withConfig({ componentId: 'sc-etn1et-2' })``
const styles = { One: styled.div.withConfig({ componentId: 'sc-etn1et-3' })`` }
let Component
Component = styled.div.withConfig({ componentId: 'sc-etn1et-4' })``
const WrappedComponent = styled(Inner).withConfig({ componentId: 'sc-etn1et-5' })``

