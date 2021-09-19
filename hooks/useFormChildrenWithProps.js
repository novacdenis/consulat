import React from "react";

export default function useFormChildrenWithProps(props) {
  const passProps = (children) =>
    React.Children.map(children, (child) => {
      if (child.props?.name) {
        return React.cloneElement(child, props);
      }
      if (child.props?.children && !child.props?.dontClone) {
        return React.cloneElement(child, { children: passProps(child.props?.children) });
      }

      if (child.props?.dontClone) {
        return React.Children.only(child)
      }
      
      return child;
    });

  return passProps;
}
