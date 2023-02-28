import './Layout.css'
import qr from '../assets/qrcode.png'
import photo from '../assets/fernanda.jpg'
import wpp from '../assets/wpp.png'
import email from '../assets/email.png'
const Layout = () => {
  return (
    <div>
      <div className="all">
      <div className="body">
        <h1 className='title'>Olá, eu sou sua nova síndica</h1>
        <img className='photo' src={photo} alt="" />
        <h2 className="subtitle">
          Muito prazer, eu sou a Fernanda Moreira e quero logo poder te conhecer pessoalmente!
        </h2>
        <h2>
          Estamos iniciando os processos de transição da gestão. Enquanto isso, salve o meu contato e me mande uma mensagem para que eu também possa salvar o seu contato.
        </h2>
        <br />
        <div className="contact">
          <ul>
            <li>
              <div>
                <img className='wpp-icon' src={wpp} alt="" />
                <a className='wpp' href="http://wa.me/5553984533163">(53)98453-3163</a>
              </div>
            </li>
            <li>
              <div>
                <img className='email-icon' src={email} alt="" />
                <a className='email' href="mailto:femoreiramasc@yahoo.com.br">femoreiramasc@yahoo.combr</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="qrcode">
          <img className='qr' src={qr} alt="" />
          <h3>Se preferir, aponte a câmera do celular para o QR Code e acessar meu Whatsapp.</h3>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Layout