export default function Produtos({ photo, name, price }) {
  return (
    <div style={{ display: "flex", displayDirection: "column" }}>
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
        <h4>{price}</h4>
      </div>
    </div>
  );
}
