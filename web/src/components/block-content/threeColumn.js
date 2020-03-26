import React from "react";
import BlockContent from "../block-content";
import styles from "./threeColumn.module.css";

function ThreeColumn(props) {
  // console.log(props)

  const { bodyLeft, bodyCenter, bodyRight } = props;
  const containerOption = props.containerOption ? styles.full : "container";

  return (
    <div className={`${containerOption} ${styles.twoColumn}`}>
      <BlockContent blocks={bodyLeft || []} />
      <BlockContent blocks={bodyCenter || []} />
      <BlockContent blocks={bodyRight || []} />
    </div>
  );
}

export default ThreeColumn;
