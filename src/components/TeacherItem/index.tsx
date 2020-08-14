import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://g1.globo.com/Noticias/Cinema/foto/0,,21647171-EX,00.jpg" alt="Avatar - Italo Fernandes"/>
        <div>
          <strong>Italo Fernandes</strong>
          <span>Matemática</span>
        </div>
      </header>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptates consequuntur possimus alias expedita amet maiores fuga id temporibus, illo quibusdam doloribus cumque quis? Amet provident vitae dignissimos sint eius!</p>
      
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Icon Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;