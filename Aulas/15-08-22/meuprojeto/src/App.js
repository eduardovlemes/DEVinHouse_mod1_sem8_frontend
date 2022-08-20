import "./App.css";
import Titulo from "./components/Titulo";
import Texto from "./components/Texto";
import Soma from "./components/Soma";
import CapsLock2 from "./components/CapsLock2";
import BotaoProps from "./components/BotaoProps";
import CapsLock3 from "./components/CapsLock3";
import Post from "./components/Post";
import Doces from "./components/Doces";

function App() {
  /* const docesEmCasa = ["alpino", "sensação", "shot"]; */
  const posts = [
    {
      id: 1,
      otoDoPerfil:
        "https://cdn.pensador.com/img/authors/ho/me/homer-simpson-l.jpg",
      tempoDoPost: "hoje",
      nomeDoUsuario: "Otávio",
      descricaoPost: "lorem ips...",
      imagemPublicada:
        "https://www.ahempreendimentos.com.br/images/jardim-curitiba-02.jpg",
      shareUrl: "www.google.com",
      curtidoPor: 25,
    },
    {
      id: 2,
      fotoDoPerfil:
        "https://cdn.pensador.com/img/authors/ho/me/homer-simpson-l.jpg",
      tempoDoPost: "hoje",
      nomeDoUsuario: "Sebas",
      descricaoPost: "lorem ips...",
      imagemPublicada:
        "https://www.ahempreendimentos.com.br/images/jardim-curitiba-02.jpg",
      shareUrl: "www.google.com",
      curtidoPor: 0,
    },
  ];
  return (
    <div>
      {/* <Titulo />
      <Texto/>
      <Soma numero1={10} numero2={20} />
      <CapsLock2 textoEnviado = "Sou uma props"/> 
      <button textoEnviado="Botão Azul" corFundo="blue"></button>
      <CapsLock3> Eu sou um filho</CapsLock3> */}
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            fotoDoPerfil={post.fotoDoPerfil}
            tempoDoPost={post.tempoDoPost}
            nomeDoUsuario={post.nomeDoUsuario}
            descricaoPost={post.descricaoPost}
            imagemPublicada={post.imagemPublicada}
            shareUrl={post.shareUrl}
            curtidoPor={post.curtidoPor}
          />
        );
      })}

      {/* <Doces listaDeDoces={docesEmCasa} /> */}
    </div>
  );
}
export default App;
