import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const Layout = ({children}:{children: JSX.Element[] | JSX.Element}) => {
  return (
    <StyledLayout>
        <Header/>{children}<Footer/></StyledLayout>
  )
}

const StyledLayout = styled.div`
`

export default Layout