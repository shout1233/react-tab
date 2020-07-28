import React from "react";

const Panel = (props) => {
  const { value, index, children, ...other } = props;

  console.log("index :" + index + " value : " + value);

  return <div>{value === index && <> {children} </>}</div>;
};

export default React.memo(Panel);

function areEqual(prevProps, nextProps) {
  return (
    prevProps.value === nextProps.value &&
    prevProps.index === nextProps.index &&
    prevProps.children.props.rowData === nextProps.children.props.rowData
  );
}
