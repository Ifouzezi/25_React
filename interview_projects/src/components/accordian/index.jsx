import { React, useState } from "react";
import faqData from "./faqData";
import "./styles.css";

function Accordian() {
    {/*Singe Selection*/ }
    const [active, setActive] = useState(null);

    function handleSingleSelection(getCurrentId) {
        setActive(getCurrentId === active ? null : getCurrentId);
    }

    console.log(active);
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
                        {
                            active === item.id ?
                                <div className="accordian__content">{item.answer}</div>
                                : null
                        }
                    </div>
                )) : <div>No data found</div>
                }
            </div>
        </div>
    );
}

export default Accordian;