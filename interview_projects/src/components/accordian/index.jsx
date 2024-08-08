import { React, useState } from "react";
import faqData from "./faqData";

function Accordian() {
    {/*Singe Selection*/ }
    const [active, setActive] = useState(null);

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);

    }

    return (
        <div className="wrapper">
            <div className="accordian">
                {faqData && faqData.length > 0 ? (faqData.map((item) =>
                    <div className="accordian__item">
                        <div
                            onClick={() => handleSingleSelection(item.id)}
                            className="accordian__title"
                        >
                            <h3>
                                {item.question}
                            </h3>
                            <span>+</span>
                        </div>
                    </div>
                )) : <div>No data found</div>
                }
            </div>
        </div>
    );
}

export default Accordian;