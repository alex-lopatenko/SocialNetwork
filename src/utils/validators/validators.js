export const required = (value) => {
    if (value) return  undefined;
    return "Field is required";
}

export const MaxLengthCreator = (maxLength) => (value) => {
    if (value.length > 30 ) return  `Max length is ${maxLength} symbols`;
    return undefined;
}