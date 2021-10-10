import * as React from "react";
import cn from "clsx";

// @ts-ignore
import styles from "./payTab.module.scss";

interface ComponentProps {
  id: number | string;
  activeTabId: number | string;
  name: string;
  onClick: (id: number | string) => void;
}

const PayTab: React.FC<ComponentProps> = ({ id, activeTabId, name, onClick }) => {
  const handleClick = React.useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  return (
    <button
      type="button"
      className={`${styles.tab} ${cn({
        [styles.tabActive]: id === activeTabId,
      })}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default PayTab;
