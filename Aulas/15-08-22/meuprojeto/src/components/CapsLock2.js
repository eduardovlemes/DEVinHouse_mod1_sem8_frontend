export default function CapsLock2(props) {
  const texto = props.textoEnviado;
  const textoEmMaiusculo = texto.upperCase();
  return <p>{textoEmMaiusculo}</p>;
}
