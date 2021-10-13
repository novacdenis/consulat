const classNames = (...classes) => {
  return classes.filter((cls) => !!cls).join(' ');
};

export default classNames;
