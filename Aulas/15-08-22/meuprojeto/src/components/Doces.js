export default function Doces({ listaDeDoces = [] }) {
  return (
    <>
      <h3>Doces em casa</h3>
      {listaDeDoces.length >= 1 ? (
        <p>Sim, ainda temos {listaDeDoces.lenght}.</p>
      ) : (
        <p>Acabou!</p>
      )}
    </>
  );
}
