import Dropdown from "../components/Dropdown";

function About() {
  const fiabilite = "Fiabilité";
  const respect = "Respect";
  const service = "Service";
  const securite = "Sécurité";

  return (
    <main>
      <section className="hero about_hero"></section>
      <section className="about_info">
        <Dropdown title="Fiabilité" content={fiabilite} />
        <Dropdown title="Respect" content={respect} />
        <Dropdown title="Service" content={service} />
        <Dropdown title="Sécurité" content={securite} />
      </section>
    </main>
  );
}

export default About;
