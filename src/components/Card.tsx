import "./../styles/css/components/Card.css";
function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

export default Card;
