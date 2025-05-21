import Container from "../../ui/Container"
import SiteLogo from "./Logo"
import Navbar from "./Navbar"

const Header = ()=>{
    return(
        <>
            <header className="py-3 lg:py-5">
                <Container>
                    <div className="inner-wrapper flex items-center justify-between">
                        <SiteLogo />
                        <Navbar />
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header