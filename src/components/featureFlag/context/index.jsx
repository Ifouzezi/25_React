import { createContext, useEffect, useState } from "react";
import featuredFlagsData from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({}); // Initial state matches API response type

    async function fetchFeatureFlags() {
        try {
            setLoading(true);
            const response = await featuredFlagsData();
            setEnabledFlags(response); // Correctly updating the state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching feature flags:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFeatureFlags(); // Removed unused parameter
    }, []);

    return (
        <FeatureFlagContext.Provider value={{ loading, enabledFlags }}>
            {children}
        </FeatureFlagContext.Provider>
    );
}
