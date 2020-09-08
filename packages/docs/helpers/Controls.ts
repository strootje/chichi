export const fixChecks = (props: []) => props.map(prop => ({ [prop]: true })).reduce((prev, cur) => ({ ...prev, ...cur }), {});
