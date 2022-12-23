export default function Section({ className = "", children }) {
  return (
    <section className={`border-none px-4 py-20 phone-xs:px-0 ${className}`}>
      {children}
    </section>
  );
}
