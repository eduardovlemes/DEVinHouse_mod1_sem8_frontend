export default function CapsLock3({ children }) {
  const textoEmLetraMaiuscula = children.toUpperCase();
  return <p>{textoEmLetraMaiuscula}</p>;
}
