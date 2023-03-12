import { useState } from "react";

const Formulario = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessagge] = useState("");

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenimos que se refresque la pagina (este es el comportamiento por default del submit)
    if (userData.name.length < 5) {
      setError(true);
      setErrorMessagge("El nombre no debe ser menor a 5 letras");
      return;
    }
    if (!userData.email.includes("@") || !userData.email.includes(".com")) {
      setError(true);
      setErrorMessagge("El email no es válido");
      return;
    }

    if (userData.password.length === 0) {
      setError(true);
      setErrorMessagge("El campo de la contraseña no debe estar vacio");
      return;
    }
    if (!(userData.password === userData.password.trim())) {
      setError(true);
      setErrorMessagge("La contraseña no debe tener espacios en blanco");
      return;
    }
    console.log(userData);
  };
  return (
    <div>
      <h1>Este es el formulario</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          name="email"
          placeholder="Ingrese su email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Ingrese su contraseña"
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
      {error && <h2>{errorMessage}</h2>}
    </div>
  );
};

export default Formulario;
