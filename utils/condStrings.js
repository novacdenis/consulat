/**
 * condStrings - "Conditional Strings" -
 * filter a list of boolean expressions and return string.
 *
 * @param args
 * @returns {string}
 */
 const _cs = (...args) =>
 args
   .reduce((accumulator, itm) => {
     if (itm) {
       accumulator.push(`${itm}`.trim());
       return accumulator;
     }
     return accumulator;
   }, [])
   .join(' ');

export default _cs;
