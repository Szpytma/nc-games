function Footer() {
  const github = "https://github.com/Szpytma/";
  let year = new Date().getFullYear();

  return (
    <footer className="Footer">
      Created by{" "}
      <a href={github} target="_blank" rel="noreferrer">
        Szpytma
      </a>{" "}
      ® {year}
    </footer>
  );
}

export default Footer;
