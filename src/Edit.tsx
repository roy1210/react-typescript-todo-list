import React from "react";

interface IProps {
  text: string;
  complete: boolean;
  clicked: () => void;
}

const Edit: any = (props: IProps) => {
  return (
    <div>
      <div
        style={{
          width: "40%",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          padding: "2px 16px",
        }}
      >
        <h3 style={{ textDecoration: props.complete ? "line-through" : "" }}>
          {props.text}
        </h3>
        <input type="text" value={props.text} />
      </div>
      <button style={{ padding: "1px 22px" }} onClick={props.clicked}>
        Edit
      </button>
      <br /> <br />
    </div>
  );
};

export default Edit;
