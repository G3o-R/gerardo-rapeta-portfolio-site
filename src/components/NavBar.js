import { NavbarContainer, NavLink, NavLinks, SocialsContainer, SocialsWrapper } from "../styles/NavBarStyles";


export default function NavBar(){

    return(
        <NavbarContainer>
            {/* left-container or logo container here */}
            <NavLinks>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/SpeedInterview">Speed Interview</NavLink>
            </NavLinks>
            <SocialsWrapper>
                <SocialsContainer>
                    {/* svgs of socials here */}
                </SocialsContainer>
            </SocialsWrapper>
        </NavbarContainer>
    )
}