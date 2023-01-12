export function LotteryButton(props) {
  const { clickHandler, wasDraw, ...attributes } = props;

  console.log(clickHandler);

  return (
    <button disabled={!!wasDraw} onClick={clickHandler} {...attributes}>
      {!!wasDraw ? "Numero estratto" : "🔘"}
    </button>
  );
}
