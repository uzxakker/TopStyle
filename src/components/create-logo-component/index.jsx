import React from "react";
import styles from "./styled.module.css";
import Category from "../category/index";
import Orders from "./orders";
import ExampleWork from "./examle-work";
import Partner from "../partner/index";
const CreateLogoComponent = () => {
  return (
    <>
      <div className={styles.order_wrapper}>
        <Category />
        <Orders/>
        <ExampleWork/>
        <Partner/>
      </div>
    </>
  );
};

export default CreateLogoComponent;
