import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../modal/modal.css'
import {ImDropbox} from 'react-icons/im'
export default function Example({icon}) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div onClick={() => setLgShow(true)}>{icon}</div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            KIRISH YOKI SHAXSIY KAMINETGA KIRISH
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
            <div className='box'>
            <div className='left-modal'>
              
                <div></div>
                <span>Telefon</span>
                <br/>
                
                <form action="">
                    <input type="text" placeholder='+998(_)__-_-_' />
                </form>
                <br/>
                <button className='button-modal'>
                <h5>
                   Kirish
                </h5>
                </button>
            </div>
            </div>
            <div className='right-modal'>
               <div className='model-box'>
                   <img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />
                   <h5>Endi bozorga borishga hojat 
                      <br/> yo'q</h5>
                      <span></span>
               </div>
               <div className='model-box'>
                   <img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" />
                   <h5>Tez yetkazib berish</h5>
                   
               </div>
               <div className='model-box'>
                   <img src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" />
                   <h5>Siz uchun qulayliklar</h5>
               </div>
               <div className='model-box'>
                   <img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" />
                   <h5>Bo'lib to'lash</h5>
               </div>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}