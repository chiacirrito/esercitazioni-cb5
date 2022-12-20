export function Button() {
  const log = () => {
    console.log("Hello world!");
  };

  return (
    <button
      onClick={log}
      className="btn"
      aria-label="Click me and show a console log"
    >
      Click me and show a console log!
    </button>
  );
}
