import '../styles/components/card.scss';
import { useNavigate } from 'react-router-dom';

function Card({ id, title }) {
  const navagation = useNavigate();

  const handleClick = () => {
    navagation(`/logement/${id}`);  // Redirige vers la page de détail avec l'ID
  };
  return (
    <div className="card" onClick={handleClick}>
      <p>{title}</p>
    </div>
  );
}

export default Card;
