import React, { useState } from 'react';
import styled from 'styled-components';
import Landscape from '../Styled/canards_de_bain.png';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ModalText = styled.p`
  margin-bottom: 10px;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalButton = styled.button`
  margin-left: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button className='btn btn-success m-3' onClick={openModal}>Open Modal</button>
            {isOpen && (
                <ModalContainer>
                    <ModalContent>
                        <ModalTitle>Modal Title</ModalTitle>
              <ModalImage src={Landscape} alt="Modal Image" />
                        <ModalText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec felis sit amet ex cursus
                            imperdiet. Sed sit amet ex auctor, mattis sem vitae, tristique ligula. Curabitur non nunc
                            ultrices, malesuada purus id, finibus elit.
                        </ModalText>
                        <ModalButtonContainer>
                            <ModalButton onClick={closeModal}>Close</ModalButton>
                            <ModalButton>Save</ModalButton>
                        </ModalButtonContainer>
                    </ModalContent>
                </ModalContainer>
            )}
        </div>
    );
};

export default Modal;

// Correction

// import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// const StyledModalWrapper = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: hsla(0, 0%, 0%, 0.7);
//   position: fixed;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const StyledModal = styled.div`
//   width: 40rem;
//   min-height: 10rem;
//   background: #fff;
//   border-radius: 8px;
//   padding: 1.5rem;
// `;

// const ModalHeader = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   h2 {
//     margin: 0;
//   }
// `;

// const ModalContent = styled.div`
//   margin: 2rem 0;
//   line-height: 1.5rem;
// `;

// const ModalActionWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

// const Modal = ({ title, children, actions }) => {
//   return (
//     <StyledModalWrapper>
//       <StyledModal>
//         <ModalHeader>
//           <h2>{title}</h2>
//         </ModalHeader>
//         <ModalContent>{children}</ModalContent>
//         <ModalActionWrapper>{actions}</ModalActionWrapper>
//       </StyledModal>
//     </StyledModalWrapper>
//   );
// };

// Modal.defaultProps = {
//   title: 'Lorem ipsum',
//   children: <span></span>
// }

// Modal.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node,
//   actions: PropTypes.node.isRequired
// };

// export default Modal;