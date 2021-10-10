import * as React from "react";
import cn from "clsx";

// @ts-ignore
import PayIcon from "../PayIcon/PayIcon";
// @ts-ignore
import styles from "./payAccordion.module.scss";

interface ComponentProps {
  title: string;
  content: JSX.Element;
  defaultOpened: boolean;
}

const PayAccordion: React.FC<ComponentProps> = ({ title, content, defaultOpened }) => {
  const [opened, setOpened] = React.useState(defaultOpened);

  const handleClick = React.useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  return (
    <>
      <button type="submit" className={styles.top} onClick={handleClick}>
        <h3 className={styles.title}>{title}</h3>
        {/*<PayIcon*/}
        {/*  className={`${styles.icon} ${cn({*/}
        {/*    [styles.iconReversed]: opened,*/}
        {/*  })}`}*/}
        {/*  name="forward"*/}
        {/*  style={{ height: 20, margin: 5 }}*/}
        {/*/>*/}
      </button>
      {opened && <div className={styles.content}>{content}</div>}
    </>
  );
};

export default PayAccordion;
