import React from "react";

import classes from "./UIInput.module.css";

const UIInput = (props) => {
	return <input className={classes.input} {...props} />;
};

export default UIInput;
