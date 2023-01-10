const variantMap = {
  body: `text-md`,
  title: `text-xl mb-sm`,
};

export const Text = (props) => {
  const { as = "div", children, variant = "body" } = props;

  const Element = as;
  return (
    <Element className={`Text ${variantMap[variant] ?? ""}`}>
      {children}
    </Element>
  );
};
