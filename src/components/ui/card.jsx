export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl border border-gray-200 shadow-sm bg-white ${className}`}>
      {children}
    </div>
  );
}