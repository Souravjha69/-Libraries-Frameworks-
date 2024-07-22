import { useState } from "react";

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if(targetElement){
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientReact().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        } 
        setMobileMenuOpen(false);
    }
    return (
       <div>
        <nav className="fixed left-0 right-0 top-4 z-50">
            {/* Desktop Menu */}
            
        </nav>
       </div>
    );
}
export default Navbar;