import styles from "../button/Button.module.css";

const Button = () => {
  return (
    <div className={styles.cBtn}>
      <button className={styles.btn}>Click Me</button>
    </div>
  );
};

export default Button;
