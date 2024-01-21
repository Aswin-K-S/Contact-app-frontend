import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
function Header() {
  return (
    <div> <MDBNavbar light style={{backgroundColor:'#2c3968'}} >
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
      <i class="fa-solid fa-address-card fs-3" style={{color:'#F0F8FF'}}></i>&nbsp;&nbsp;&nbsp;
        <span style={{fontWeight:'500',fontSize:'30px',color:'#F0F8FF',fontFamily:'Lobster'}}>Connect Ease</span>
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header