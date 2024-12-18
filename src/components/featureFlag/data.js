const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToe: true,
    showRandomColorGenerator: true,
    showCustomTab: true
};

const featuredFlagsData = () => {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) {
            setTimeout(() => resolve(dummyApiResponse), 500); // Fixed setTimeout syntax
        } else {
            reject("Some error occurred! Please try again");
        }
    });
};

export default featuredFlagsData;
