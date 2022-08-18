export default function BotaoProps(props) {
  const { textoEnviado, corFundo } = props;
  return <button style={{ backgroundColor: corFundo }}>{textoEnviado}</button>;
}
