import React from "react";

interface BtnTextProps {
    text: string;
    className: string;
    onClick: () => void;
}

const Btn: React.FC<BtnTextProps> = ({ text, className, onClick }) => {
    return (
        <div>
            <div onClick={onClick} className={className}>
                {text}
            </div>
        </div>
    );
};

export default Btn;
