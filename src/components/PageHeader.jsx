import SplitWords from "./SplitWords.jsx";

export default function PageHeader({ title, lead }) {
  return (
    <section className="phead">
      <div className="wrap">
        <SplitWords as="h1" className="display" text={title} />
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}
