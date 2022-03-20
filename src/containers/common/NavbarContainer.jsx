import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarComponent from '../../components/common/NavbarComponent'

function NavbarContainer() {
  const navigate = useNavigate();
  
  const onClickIcon=()=>{
    navigate("/");
  };

  return (
    <>
        <NavbarComponent onClickIcon={onClickIcon} />
    </>
  )
}

export default NavbarContainer