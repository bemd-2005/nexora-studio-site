export default function Status({ tone = "live", children }) {
  return (
    <span className={"status status-" + tone}>
      <i />
      {children}
    </span>
  );
}
