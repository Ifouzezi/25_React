import { useContext } from "react"
import LightDarkMode from "../lightDarkMode"
import RandomColor from "../randomColor"
import TicTacToe from "../ticTacToe"
import { FeatureFlagContext } from "./context"
import TabsTest from "../customTab/tabsTest"


const FeatureFlag = () => {
    const { loading, enabledFlags } = useContext(FeatureFlagContext);

    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LightDarkMode />
        },
        {
            key: "showTicTacToe",
            component: <TicTacToe />
        },
        {
            key: "showRandomColorGenerator",
            component: <RandomColor />
        },
        {
            key: "showCustomTab",
            component: <TabsTest/>
        }
    ];

    if (loading) return <h1>Loading data! Please wait.</h1>;

    return (
        <div className="feature__flag">
            <h1>Feature Flags</h1>
            {componentsToRender
                .filter(({ key }) => enabledFlags[key]) // Render only enabled flags
                .map(({ component, key }) => (
                    <div key={key}>{component}</div> // Use `key` for unique identifiers
                ))}
        </div>
    );
};

export default FeatureFlag;
