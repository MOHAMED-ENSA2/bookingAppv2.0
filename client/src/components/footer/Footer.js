import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className="footer-container">
        <div className='footer'>
            <div className='footer--title'>
                Gagnez du temps et de l'argent !
            </div>
            <div className='footer--text'>
                Inscrivez-vous et nous vous enverrons les meilleures offres
            </div>
            <div className='footer--btns'>
                <input type="text" placeholder='Votre e-mail' /> 
                <button className='btn btn_sample footer_btn'>
                    Inscrivez vous 
                </button>
            </div>
            <div >
                <input type="checkbox" name=""  />
                <span className='footer--remark'>Envoyez-moi un lien pour télécharger GRATUITEMENT l'appli Booking.com !</span>
            </div>
        </div>
    </div>
  )
}

export default Footer