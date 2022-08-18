import styled from "styled-components";

export const Wrapper = styled.div`
    /* width:100%; */
    display:flex;
    padding-inline:60px;
    padding-top:20px;
    height:60px;
    align-items:center;
   
    justify-content:flex-end;

    `

export const LogoCont = styled.div`
    
    `
export const SidebarRevealButton = styled.button`
    position:absolute;
    top:20px;
    height:60px;
    /* padding-top:20px; */
    border:none;
    border-radius: 50%;
    width:60px;
    right:20px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:400;



    @media (min-width:800px) {
    display: none;
}
    `
export const NavLinksCont = styled.nav`
    display:flex;
    padding:60px;
    @media (max-width:800px) {
    display: none;
}

    `

export const NavLink = styled.a`
    margin:20px;
    font-size:var(--fontsize3);
    `
