import "../styles/css/baseboard.css";

// COMPONENTE RODAPÉ
export default function Baseboard() {
  return (
    <div id="baseBoard"> {/* BASE DO COMPONENTE */}
      <div id=" message">{/* Mensagem*/}
        <h1>Portiolio</h1>
        <hr />
      </div>
      <div>
        <p>Obrigado por vir até aqui!</p>
        <p><span>Criado e desenvolvido por mim, <b>Arthur Vinicius</b>.</span></p>
      </div>
      <div id="contact"> {/* Contato */}
        <h1>Contato:</h1>
        <button>a</button>
        <button>a</button>
        <button>a</button>
      </div>

    </div>
  );
}
