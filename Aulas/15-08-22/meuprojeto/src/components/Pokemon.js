export default function Pokemon({ nome, foto, tipo }) {
  return (
    <div
      style={{
        display: "flex",
        displayDiretion: "column",
      }}
    >
      <h1>{nome}</h1>
      <img src={foto} />
      <p>Tipo: {tipo}</p>
    </div>
  );
}
