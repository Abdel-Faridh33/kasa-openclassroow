import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown"; // Dropdown récemment créé
import data from "../logements";
import active from "../assets/star-active.png";
import inactive from "../assets/star-inactive.png";
import arrow_left from "../assets/arrow_left.svg";
import arrow_right from "../assets/arrow_rigth.svg";

function DetailPage() {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0)
  
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

  function chaneImage(action){
    let nombreImages = accommodation.pictures?.length
    if (action == "left") {
      setCurrentImage((currentImage - 1 + nombreImages) % nombreImages)
    } else {
      setCurrentImage((currentImage + 1 + nombreImages) % nombreImages)
    }
  } 

  return (
    <div className="detail-page">
      <main>
        <div className="cover-image">
          <img src={accommodation.pictures[currentImage]} alt={accommodation.title} className="converimg" />
          <div onClick={()=>{chaneImage("letf")}}
            class="arrow arrow_left">
          <img 
            src={arrow_left}
            alt="Icon préccédent"
          /></div>
          <div onClick={()=>{chaneImage("right")}} class="arrow arrow_right" >
          <img  src={arrow_right} alt="Icon suivant" />
        </div>
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
            <div className="rating">{Notation(accommodation.rating)}</div>
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
