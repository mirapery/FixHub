const AboutText = () => {
  // Olemme FixHub ja tarjoamme palvelua, jonka avulla korjattava tuote sekä
  // korjaaja voivat löytää toisensa. Korjaaja tarjoaa summan korjattavan
  // tuotteen korjaamisesta ja tavaran omistaja hyväksyessään tarjouksen saa
  // tavaran uuteen kuntoon
  return (
    <div className="w-[38vw] text-center">
      <h1 className="font-extrabold text-4xl py-2 text-fh_beige-dark">ABOUT US</h1>
      <p className="text-xl font-bold">
      We are FixHub and offer a service that helps connect a product in need of repair with a repair technician. The technician provides a price for repairing the product, and when the owner of the item accepts the offer, the item is restored to its original condition.
      
      </p>
    </div>
  );
};

export default AboutText;
