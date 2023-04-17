function Footer() {
  const paw = "https://github.com/Szpytma/";
  let year = new Date().getFullYear();

  return (
    <footer>
      Created by{" "}
      <a href={paw} target="_blank" rel="noreferrer">
        Paw
      </a>{" "}
      ® {year}
    </footer>
  );
}

export default Footer;
