import React from "react";

interface FooterProps {
    year: number;
    companyName: string;
}

const Footer: React.FC<FooterProps> = ({ year, companyName }) => {
    return (
        <footer>
            <p>
                &copy; {year} {companyName}
            </p>
        </footer>
    );
};

export default Footer;
