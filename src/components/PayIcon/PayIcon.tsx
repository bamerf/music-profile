import * as React from "react";

// @ts-ignore
import styles from "./payIcon.module.scss";
/**
 * @enum
 */
enum Icons {
  back = "arrow-back",
  forward = "arrow-forward",
  dropDown = "arrow-drop-down",
  dropRight = "arrow-drop-right",
  cross = "cross",
  delete = "cross",
  error = "error",
  search = "search",
  cancel = "cancel",
  check = "check",
  language = "language",
  location = "location",
  letter = "letter",
  eur = "eur",
  guests = "guests",
  occasion = "occasion",
  info = "info",
  calendar = "calendar",
  time = "time",
  filters = "filters",
  hot = "hot",
  star = "star",
  success = "success",
  thumbsUp = "thumbs-up",
  thumbsDown = "thumbs-down",
  add = "add",
  vegan = "vegan",
  vegetarian = "vegetarian",
  drag = "drag",
  minus = "minus",
  plus = "plus",
  comments = "comment",
  comment = "comment",
  basket = "basket",
  send = "send",
  details = "details",
  dot = "dot",
  usd = "usd",
  gbp = "gbp",
  navigate = "navigate",
  warning = "warning",
  truck = "truck",
}

interface ComponentProps {
  name: keyof typeof Icons;
}

const PayIcon: React.FC<ComponentProps & React.SVGProps<SVGSVGElement>> = ({ name, ...rest }) => {
  const ImportedIconRef = React.useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = React.useState(true);

  const importIcon = React.useCallback(async () => {
    try {
      ImportedIconRef.current = (await import(`./icons/${Icons[name]}.svg`)).ReactComponent;
    } finally {
      setLoading(false);
    }
  }, [name]);

  React.useEffect(() => {
    setLoading(true);

    importIcon();

    return () => {
      setLoading(false);
    };
  }, [importIcon, name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;

    return <ImportedIcon className={styles.root} {...rest} />;
  }

  return null;
};

export default PayIcon;
