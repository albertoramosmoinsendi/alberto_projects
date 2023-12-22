export const GuardarEnStorage = (clave, elemento) => {
  // Conseguir los elementos que ya tenemos del localStorage
  let elementos = JSON.parse(localStorage.getItem(clave));
  // Comprobar si es un array
  if (Array.isArray(elementos)) {
    // Guardar dentro del array un elemento nuevo
    elementos.push(elemento);
  } else {
    elementos = [elemento];
  }

  // Guardar en el localStorage
  localStorage.setItem(clave, JSON.stringify(elementos));

  // Devolver el objeto guardado
  return elemento;
};
