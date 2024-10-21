import React from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown"; // Dropdown récemment créé
import data from "../logements";
import active from "../assets/star-active.png";
import inactive from "../assets/star-inactive.png";

function DetailPage() {
  const { id } = useParams();
  const accommodation = data.find((item) => item.id === id);

  if (!accommodation) {
    return <p>Logement non trouvé</p>;
  }

  const Notation = (rating) => {
    // Limite la note à 5 étoiles maximum
    const maxStars = 5;
    const fullStars = Math.floor(rating); // Étoiles pleines
    const emptyStars = maxStars - fullStars; // Étoiles vides

    return (
      <div className="star-rating">
        {/* Affichage des étoiles pleines */}
        {[...Array(fullStars)].map((_, index) => (
          <img alt="active" src={active} />
        ))}

        {/* Affichage des étoiles vides */}
        {[...Array(emptyStars)].map((_, index) => (
          <img alt="inactive" src={inactive} />
        ))}
      </div>
    );
  };

  return (
    <div className="detail-page">
      <main>
        <div className="cover-image">
          <img src={accommodation.cover} alt={accommodation.title} />
        </div>
        <div className="flex infos">
          <div className="">
            <h1>{accommodation.title}</h1>
            <p className="location">{accommodation.location}</p>
            <div className="flex">
              {accommodation.tags.map((tag, index) => {
                return (
                  <div key={index} className="badge">
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="host">
            <div className="host-info">
              <span>{accommodation.host.name}</span>
              <img
                alt={accommodation.host.name}
                src={accommodation.host.picture}
              />
            </div>
            <div className="rating">
              {Notation(accommodation.rating)}
            </div>
          </div>
        </div>
        <div className="flex drop_container">
          <div className="drop_gauche">
            <Dropdown title="Description" content={accommodation.description} />
          </div>
          <div className="drop_droite">
            <Dropdown title="Équipements" content={accommodation.equipments} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DetailPage;
