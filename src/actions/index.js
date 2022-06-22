// Here's our Action Creator function
// we used Named Export instead of Export Default this time
// because we are going to create more action creators in this file.
// Named Exports require curly braces to be imported which you can see in the CycleList.js file below.
export const selectReact = (react) => {
    // It simply returns an Action
    return {
        type: react.type
    };
};