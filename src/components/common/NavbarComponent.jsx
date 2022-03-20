import React, { Children } from 'react'
import styled from 'styled-components';
import Responsive from './Responsive';
import { GiAmmoBox } from "react-icons/gi";
import ButtonComponent from './elements/ButtonComponent';
import TextComponent from './elements/TextComponent';

const NavbarBlock = styled.div`
    padding: 1rem 0;
    width: 100%;
    position: fixed;
    top: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    z-index: 999;
    background: #fff;
`
const NavbarWrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
    
  }
`;

const NavbarText = styled(TextComponent)`
  color: #555555;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  font-weight: 400;
`;

const LogoIcon = styled(GiAmmoBox)`
    height: 30px;
    cursor: pointer;
    width : 30px;
`

const AuthBtn = styled(ButtonComponent)`
    cursor: pointer;
    color: #ffffff;
    border-color: #ed6653;
    background-color: #ed6653;
`

const NavbarComponent = ({onClickIcon}) => {
  return (
    <NavbarBlock>
      <NavbarWrapper>
        <div
          className="left"
        >
          <LogoIcon
            onClick={onClickIcon}
          />
          <NavbarText>Test</NavbarText>
        </div>
        <div className="right">
            <AuthBtn to="signin">로그인</AuthBtn>
            <AuthBtn to="signup">회원가입</AuthBtn>
        </div>
      </NavbarWrapper>
    </NavbarBlock>
  );
};

export default NavbarComponent