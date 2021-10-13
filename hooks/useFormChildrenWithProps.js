import React from "react";
import Link from "next/link";
import FormItem from "@/components/Form/formItem";

const useFormChildrenWithProps = (props) => {
  const types = [(<FormItem />).type.toString()];
  const nextOnlyOneChildren = [(<Link />).type.toString()];

  const passProps = (children) => {
    return React.Children.map(children, (child) => {
      if (nextOnlyOneChildren.includes(child.type?.toString()) || typeof child.type === "string") {
        return React.Children.only(child);
      }

      return React.isValidElement(child)
        ? types.includes(child.type.toString())
          ? React.cloneElement(child, { ...props })
          : child.props?.children
          ? React.cloneElement(child, {
              children: passProps(child.props?.children),
            })
          : child
        : child;
    });
  };

  return passProps;
};

export default useFormChildrenWithProps;
