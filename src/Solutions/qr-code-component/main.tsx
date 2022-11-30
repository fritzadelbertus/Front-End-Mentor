import QRCode from './image-qr-code.png'
import './styles.scss'

function QrCodeComponent() {
  return (
    <div className='background'>
      <div className="QRCodeComponent">
        <img src={QRCode} alt="QR Code" />
        <article>
          <h1>Improve your front-end skills by building projects</h1>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </article>
      </div>
    </div>
  )
}

export default QrCodeComponent
