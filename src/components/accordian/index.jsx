import React, { useState, useEffect } from "react";
import faqData from "./faqData";
import "./styles.css";

function Accordion() {
    // State for managing the currently active single selection
    const [activeAccordionId, setActiveAccordionId] = useState(null);
    
    // State for toggling between single and multiple selection modes
    const [isMultipleSelectionEnabled, setIsMultipleSelectionEnabled] = useState(false);
    
    // State for storing active accordions in multiple selection mode
    const [activeAccordionIds, setActiveAccordionIds] = useState([]);

    useEffect(() => {
        console.log('Mode changed:', isMultipleSelectionEnabled);
        console.log('Active accordion ID (single mode):', activeAccordionId);
        console.log('Active accordion IDs (multiple mode):', activeAccordionIds);

        if (isMultipleSelectionEnabled) {
            // Preserve currently active single accordion when switching to multiple mode
            if (activeAccordionId !== null && !activeAccordionIds.includes(activeAccordionId)) {
                setActiveAccordionIds([activeAccordionId, ...activeAccordionIds]);
            }
        } else {
            // Preserve the active accordions when switching to single mode
            if (activeAccordionIds.length > 0) {
                setActiveAccordionId(activeAccordionIds[0]);
                setActiveAccordionIds([]);
            }
        }
    }, [isMultipleSelectionEnabled]);

    function handleAccordionToggle(accordionId) {
        console.log('Toggling accordion ID:', accordionId);

        if (isMultipleSelectionEnabled) {
            if (activeAccordionIds.includes(accordionId)) {
                // If the accordion is already active, remove it from the array
                setActiveAccordionIds(prevActiveIds => {
                    const updatedIds = prevActiveIds.filter(id => id !== accordionId);
                    console.log('Updated active accordion IDs (multiple mode):', updatedIds);
                    return updatedIds;
                });
            } else {
                // Otherwise, add the accordion to the active list
                setActiveAccordionIds(prevActiveIds => {
                    const updatedIds = [...prevActiveIds, accordionId];
                    console.log('Updated active accordion IDs (multiple mode):', updatedIds);
                    return updatedIds;
                });
            }
        } else {
            // Single selection mode
            const newActiveId = accordionId === activeAccordionId ? null : accordionId;
            setActiveAccordionId(newActiveId);
            console.log('Updated active accordion ID (single mode):', newActiveId);
        }
    }

    return (
        <div className="wrapper">
            <button onClick={() => setIsMultipleSelectionEnabled(prevMode => {
                console.log('Toggling mode:', !prevMode);
                return !prevMode;
            })}>
                {isMultipleSelectionEnabled ? "Disable Multiple Selection" : "Enable Multiple Selection"}
            </button>
            <div className="accordion">
                {faqData && faqData.length > 0 ? (
                    faqData.map((item) => (
                        <div className="accordion__item" key={item.id}>
                            <div
                                onClick={() => handleAccordionToggle(item.id)}
                                className="accordion__title"
                            >
                                <h3>{item.question}</h3>
                                <span>{isMultipleSelectionEnabled && activeAccordionIds.includes(item.id) ? '-' : '+'}</span>
                            </div>
                            {(isMultipleSelectionEnabled
                                ? activeAccordionIds.includes(item.id)
                                : activeAccordionId === item.id) && (
                                    <div className="accordion__content">{item.answer}</div>
                                )}
                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div>
    );
}

export default Accordion;
