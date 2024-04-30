export default function Card({ children }) {
  return (
    <div id="card">
      <p>
        {children} is a professor of Computer Science at the University of
        Illinois.
      </p>
      <p>
        <a href="mailto:blake@example.com">{children}</a>
      </p>
    </div>
  );
}
