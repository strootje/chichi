export const checks = (props: any[]) => props.map(prop => ({ [prop]: true })).reduce((prev, cur) => ({ ...prev, ...cur }), {});
