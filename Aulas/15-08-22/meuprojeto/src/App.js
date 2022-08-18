import "./App.css";
import Titulo from "./components/Titulo";
import Texto from "./components/Texto";
import Soma from "./components/Soma";
import CapsLock3 from "./components/CapsLock3";
import Post from "./components/Post";

function App() {
  return (
    <div>
      {/*       <Titulo />
      <Texto/>
      <Soma numero1={10} numero2={20} />
      <CapsLock3> Eu sou um filho</CapsLock3> */}

      <Post
        fotoDoPerfil="https://cdn.pensador.com/img/authors/ho/me/homer-simpson-l.jpg"
        tempoDoPost="10"
        nomeDoUsuario="Otávio"
        descricaoPost="lorem ips..."
        imagemPublicada="https://www.ahempreendimentos.com.br/images/jardim-curitiba-02.jpg"
        shareUrl="www.google.com"
        curtidoPor="25"
      />
    </div>
  );
}
export default App;
