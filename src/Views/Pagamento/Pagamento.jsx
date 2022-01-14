import React, {useState} from 'react';
import Cleave from 'cleave.js/react';

import './Pagamento.css';

const imageUrls = [
  "https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png",
  "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png",
  "https://www.discover.com/company/images/newsroom/media-downloads/discover.png",
  "https://s1.q4cdn.com/692158879/files/design/svg/american-express-logo.svg",
  "https://cdn4.iconfinder.com/data/icons/simple-peyment-methods/512/diners_club-512.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1280px-JCB_logo.svg.png"
]


// Componente pego do gitHub https://github.com/chansen17/creditCardPaymentUI


export const Pagamento = () => {
    const [creditCardNum, setCreditCardNum] = useState('#### #### #### ####');
    const [cardType, setCardType] = useState('')
    const [cardHolder, setCardHolder] = useState('Nome');
    const [expireMonth, setExpireMonth] = useState('MM');
    const [expireYear, setExpireYear] = useState('YYYY');
    const [cardTypeUrl, setCardTypeUrl] = useState('https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png');
    // const [flip, setFlip] = useState(null);
    
    const handleNum = (e) => {
      setCreditCardNum(e.target.rawValue);
      // console.log(e.target.value);
    }
  
    const handleType = (type) => {
      setCardType(type);
      console.log(type);
  
      if(type === "visa") {
        setCardTypeUrl(imageUrls[0]);
        console.log("Visa")
      } else if(type === "mastercard") {
        setCardTypeUrl(imageUrls[1]);
        console.log("Mastercard")
      } else if(type === "discover") {
        setCardTypeUrl(imageUrls[2]);
        console.log("Discover")
      } else if(type === "amex") {
        setCardTypeUrl(imageUrls[3]);
        console.log("Amex")
      } else if(type === "diners") {
        console.log("Diners")
        setCardTypeUrl(imageUrls[4])
      } else if(type === "jcb") {
        console.log("JCB");
        setCardTypeUrl(imageUrls[5]);
      }
    }
    
    const handleCardHolder = (e) => {
      setCardHolder(e.target.value);
    }
  
    const handleExpMonth = (e) => {
      setExpireMonth(e.target.value);
    }
  
    const handleExpYear = (e) => {
      setExpireYear(e.target.value);
    }
  
    // cleave.js logic 
  
    return (
         <div className="container-test">
          <form id="form-test">
              <div id="card-test">
                  <div className="header">
                      <div className="sticker"></div>
                      <div>
                        <img className="logo-test" src={cardTypeUrl} alt="Card logo-test"/>
                      </div>
                  </div>
                  <div className="body">
                      <h2 id="creditCardNumber">{creditCardNum}</h2>
                  </div>
                  <div className="footer-test">
                      <div>
                          <h5>Nome no cartao</h5>
                          <h3>{cardHolder}</h3>
                      </div>
                      <div>
                          <h5>Expira</h5>
                          <h3>{expireMonth} / {expireYear}</h3>
                      </div>
                  </div>
              </div>
  
              <div className="input-container mt">
                  <h4>Numero do cartão</h4>
                  <Cleave
                    delimiter="-"
                    options={{
                      creditCard: true,
                      onCreditCardTypeChanged: handleType
                    }}
                    onChange={handleNum}
                    placeholder="Entre com o numero do cartão"
                  />
              </div>
  
              <div className="input-container">
                  <h4>Nome</h4>
                  <input onChange={handleCardHolder} type="text" placeholder="Entre com o nome" required/>
              </div>
  
              <div className="input-grp">
                  <div className="input-container">
                      <h4>Ano de expirção</h4>
                      <select value={expireYear} onChange={handleExpYear}>
                        <option value="Janeiro">Janeiro</option>
                        <option value="Fevereiro">Fevereiro</option>
                        <option value="Março">Março</option>
                        <option value="Abril">Abril</option>
                        <option value="Maio">Maio</option>
                        <option value="Junho">Junho</option>
                        <option value="Julho">Julho</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Setembro">Setembro</option>
                        <option value="Outubro">Outubro</option>
                        <option value="Novembro">Novembro</option>
                        <option value="Dezembro">Dezembro</option>
                      </select>
                  </div>
                  <div className="input-container">
                  <h4>Month</h4>
                  <select value={expireMonth} onChange={handleExpMonth}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                      </select>
                  </div>
                  <div className="input-container">
                      <h4>CVV</h4>
                      <input type="password" placeholder="CVV" required/>
                  </div>
              </div>
  
              <button>{`Finalizar pagamento`}</button>
          </form>
      </div>
    );
  }
