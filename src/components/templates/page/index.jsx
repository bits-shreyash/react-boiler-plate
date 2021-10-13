import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../organisms/header';
import Footer from '../../organisms/footer';
const PageTemplate = ({children, ...props}) => {
  return (
    <div>
      <Header/>
      <div>{children}</div>
      <Footer/>
    </div>
  )
}
PageTemplate.propTypes = {
  // header: PropTypes.node.isRequired,
  // footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
}
export default PageTemplate