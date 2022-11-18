export const longestWord = (sen) => {
    const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ");
    arr.sort((a, b) => {return console.log("b:", b.length) - console.log("a:", a.length)});
    return arr[0];

};