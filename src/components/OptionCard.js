import React from "react";
import { NavLink } from "react-router-dom";

import Card from "./ui/Card";
import styles from "../styles/optioncard.module.css";

const OptionCard = (props) => {
    return (
        <Card className={styles["option-card__wrapper"]}>
            <NavLink to={`/${props.optionName.toLowerCase()}`}>{props.optionName}</NavLink>
        </Card>
    );
};

export default OptionCard;
