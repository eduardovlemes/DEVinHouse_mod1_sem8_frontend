import "./App.css";
import Titulo from "./components/Titulo";
import Texto from "./components/Texto";
import Soma from "./components/Soma";
import CapsLock2 from "./components/CapsLock2";
import BotaoProps from "./components/BotaoProps";
import CapsLock3 from "./components/CapsLock3";
import Post from "./components/Post";
import Doces from "./components/Doces";
import Contatos from "./components/Contatos";
import Produtos from "./components/Produtos";

function App() {
  /* const docesEmCasa = ["alpino", "sensação", "shot"]; */
  /* const posts = [
    {
      id: 1,
      fotoDoPerfil:
        "https://cdn.pensador.com/img/authors/ho/me/homer-simpson-l.jpg",
      tempoDoPost: "hoje",
      nomeDoUsuario: "Otávio",
      descricaoPost: "jjjjjjjjjjjjjjjjjjjjjjjjjj",
      imagemPublicada:
        "https://www.ahempreendimentos.com.br/images/jardim-curitiba-02.jpg",
      shareUrl: "www.youtube.com",
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
  ]; */

  /* const contato = [
    {
      id: 1,
      photo: "https://cdn.pensador.com/img/authors/ho/me/homer-simpson-l.jpg",
      name: "Homer",
      description: "jjjjjjjjjjjjjjjjjjjjjjjjjj",
    },
    {
      id: 2,
      photo:
        "https://lumiere-a.akamaihd.net/v1/images/lisa_simpson_fox_df826d5d.jpeg?region=0,0,674,864",
      name: "Lisa",
      description: "kkkkkkkkkkkkkkkkkkkkkkkk",
    },
  ]; */

  const produto = [
    {
      id: 1,
      photo:
        "https://santaluciadrogaria.vtexassets.com/arquivos/ids/162198/7896714223841.png?v=637638102766700000",
      name: "Nimesulida",
      price: "R$ 5",
    },
    {
      id: 2,
      photo:
        "https://cdn1.evitamins.com/images/products/Natures_Bounty/318778/1400/318778_front2022.webp",
      name: "Gincobiloba",
      price: "R$ 4",
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

      {/* {posts.map((post) => {
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
      })} */}

      {/* {contato.map((contat) => {
        return (
          <Contatos
            key={contat.id}
            photo={contat.photo}
            name={contat.name}
            description={contat.description}
          />
        );
      })} */}

      {produto.map((produt) => {
        return (
          <Produtos
            key={produt.id}
            photo={produt.photo}
            name={produt.name}
            price={produt.price}
          />
        );
      })}
      {/* <Doces listaDeDoces={docesEmCasa} /> */}
    </div>
  );
}
export default App;
