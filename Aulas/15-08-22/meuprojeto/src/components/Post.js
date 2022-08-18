function Post({
  nomeDoUsuario,
  fotoDoPerfil,
  tempoDoPost,
  descricaoPost,
  imagemPublicada,
  shareUrl,
  curtidoPor,
}) {
  return (
    <>
      <div className="post-header">
        <img src={fotoDoPerfil} alt="foto Perfil" />
        <div className="text-content">
          <h3>{nomeDoUsuario}</h3>
          <h3>{tempoDoPost}</h3>
        </div>

        <p>{descricaoPost}</p>

        <img src={imagemPublicada} />

        <div className="image-footer">
          <i></i>
          <span>Coments</span>
          <span>
            <a href={shareUrl}>Share</a>
          </span>
        </div>

        <p>Like by {curtidoPor}</p>
      </div>
    </>
  );
}

export default Post;
