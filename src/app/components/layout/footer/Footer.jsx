import Container from "../../ui/Container"

const Footer = ()=>{
    return(
        <>
            <footer className="py-3 lg:py-5 bg-black ">
                <Container>
                    <div className="footer-inner text-center text-white lg:text-sm text-xs">
                        <p>Copyright all right resevered.</p>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer