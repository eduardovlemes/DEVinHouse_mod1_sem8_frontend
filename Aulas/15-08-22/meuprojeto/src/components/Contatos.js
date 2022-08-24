export default function Contatos({ photo, name, description }) {
  return (
    <div
      className="contato"
      style={{ display: "flex", displayDirection: "row" }}
    >
      <div>
        <img
          src={photo}
          alt="profile photo"
          style={{
            width: "100px",
            height: "100px",
          }}
        />
      </div>
      <div className="profile">
        <h3>{name}</h3>
        <h4>{description}</h4>
      </div>
    </div>
  );
}
