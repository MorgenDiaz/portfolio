export default function Section({ className = "", id = "", children }) {
  return (
    <section
      id={id}
      className={`border-none px-4 py-20 phone-xs:px-0 ${className}`}
    >
      {children}
    </section>
  );
}
