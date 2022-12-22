const buttonVariantMap = {
  primary: "text-xl color-pink",
  secondary: "text-sm color-red",
  special: "color-blue",
};

export function Button(props) {
  console.log("props di button", props);

  const { children = "Click me!", variant = "special", title } = props;

  const log = () => {
    console.log("Hello world!");
  };

  return (
    <button
      aria-label="Click me and show a console log"
      className={`Button Button--variant-${variant} ${
        buttonVariantMap[variant] ?? ""
      }`}
      onClick={log}
      title={title}
    >
      {children}
    </button>
  );
}

export function Button2(props) {
  const { children = "Show!", variant = "secondary", title } = props;

  const consolelog = () => {
    console.log("Good morning!");
  };

  return (
    <button
      aria-label="Click me"
      className={`Button Button--variant-${variant} ${
        buttonVariantMap[variant] ?? ""
      }`}
      onClick={consolelog}
      title={title}
    >
      {children}
    </button>
  );
}

export function Button3(props) {
  const { children = "Here", variant = "special", title } = props;

  const conslog = () => {
    console.log("Good evening!");
  };

  return (
    <button
      aria-label="Click me"
      className={`Button Button--variant-${variant} ${
        buttonVariantMap[variant] ?? ""
      }`}
      onClick={conslog}
      title={title}
    >
      {children}
    </button>
  );
}
