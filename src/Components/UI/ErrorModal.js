import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css"

const ErrorModal = (props) => {

    return (
        <>
            <div className={styles.backdrop} onClick={props.onConfirm}/>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <article>
                    <div className={styles.content}>
                        <p>
                            {props.massage}
                        </p>
                    </div>
                </article>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirm} >Okay</Button>
                </footer>
            </Card>
        </>
    )
};

export default ErrorModal