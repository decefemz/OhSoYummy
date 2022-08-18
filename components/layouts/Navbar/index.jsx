import Hamburger from 'hamburger-react'
import React from 'react'
import Bars from '../../primitives/icons/bars'
import MenuBar from './Menubar'
import { LogoCont, NavLink, NavLinksCont, SidebarRevealButton, Wrapper } from './style'

export default function Index() {
    const [isSideBarOpen, setIsSideBarOpen] = React.useState(false)

    return (
        <Wrapper>
            <MenuBar close={() => setIsSideBarOpen(false)} state={isSideBarOpen} />
            <SidebarRevealButton value={isSideBarOpen} onClick={(e) => { setIsSideBarOpen(x => !x) }}>
                <Hamburger size={20} toggled={isSideBarOpen}></Hamburger>
            </SidebarRevealButton>
            <LogoCont>

            </LogoCont>
            <NavLinksCont>
                <NavLink>
                    Home
                </NavLink>
                <NavLink>
                    Work
                </NavLink>
                <NavLink>
                    About-Us
                </NavLink>
                <NavLink>
                    Contact
                </NavLink>
            </NavLinksCont>
        </Wrapper>
    )
}
