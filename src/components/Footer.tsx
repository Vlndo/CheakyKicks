import React from "react";
import Link from "react-router-dom"

interface FooterProps {
    year: number;
    companyName: string;
}

const Footer: React.FC<FooterProps> = ({ year, companyName }) => {
    return (
        <footer>
            <div>
                <div>
                    
                </div>
                <div>

                </div>
                <div>  

                </div>
            </div>
            <p>
                &copy; {year} {companyName}
            </p>
        </footer>
    );
};

export default Footer;
