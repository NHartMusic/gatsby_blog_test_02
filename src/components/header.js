import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
import { FirebaseContext } from './Firebase'
import styled from 'styled-components'

const LogoutLink = styled.span`
  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const HeaderWrapper = styled.header`
  background: pink;
  margin-bottom: 1.45rem;
`

const HeaderContent = styled.div`
   margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  display: flex;

  >h1 {
    margin: 0;
    flex-grow: 1;

    >a {
      color: white;
      text-decoration: none;
    }
  }

  >div{
    margin: auto 0;
  }

`

const UserInfo = styled.div`
  text-align: right;
`

const LoginLink = styled.div`
  margin: auto 0;

  a {
    color: white;
  }
`

const Header = ({ siteTitle }) => {
  const {firebase, user} = useContext(FirebaseContext)
  console.log(firebase, user)

  function handleLogoutClick() {
    firebase.logout().then(() => navigate('/login'))
  }

  return (
    <HeaderWrapper>
      <HeaderContent>
        <h1>
          <Link
            to='/'
          >
            {siteTitle}
          </Link>
        </h1>
        <UserInfo>
          {!!user && !!user.email &&
            <div>
              Hello, {user.email}
              <br></br>
              <LogoutLink onClick={handleLogoutClick}>
                Logout
              </LogoutLink>
            </div>
          }
          {(!user || !user.email) && 
            <LoginLink>
              <Link to='/login'>Login</Link>
            </LoginLink>
          }
        </UserInfo>
      </HeaderContent>
    </HeaderWrapper>
  )
}
  
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
