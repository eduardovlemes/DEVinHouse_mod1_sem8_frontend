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
        {/* {curtidoPor} >= 1 ? (https://cdn-icons.flaticon.com/png/128/2589/premium/2589175.png?token=exp=1660955247~hmac=dcdb2bdadc8110276201b677bb075c1f):(https://cdn-icons.flaticon.com/png/128/2589/premium/2589197.png?token=exp=1660955247~hmac=8672eb399a7de5ca079b45eefbb1126a) */}

        <p>Like by {curtidoPor}</p>
      </div>
    </>
  );
}

export default Post;
