import React from 'react'
import PropTypes from 'prop-types'

const LoginTemplate = ({
  header, children, footer, ...props
}) => {
  return (
    <Wrapper {...props}>
      <Content>{children}</Content>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
}
export default PageTemplate