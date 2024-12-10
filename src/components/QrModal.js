// src/components/QrModal.js
import React, { useEffect, useRef } from 'react';

const QrModal = ({ isVisible, qrSrc, qrProduct, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && event.target === modalRef.current) {
                onClose();
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [onClose]);

    return (
        <div ref={modalRef} className={`fixed left-0 top-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center 
               ${isVisible ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center relative">
                <span onClick={onClose} className="qrModalCloser absolute top-0 right-2 cursor-pointer text-3xl text-gray-500 hover:text-red-500">
                    &times;
                </span>
                <h2 className="text-lg font-medium mb-4">Lihat produk <span className="font-bold text-blue-600">{qrProduct}</span> secara langsung dengan aplikasi FashionAR!</h2>
                <img src={qrSrc} alt="QR Code" className="mx-auto" />
            </div>
        </div>
    );
};

export default QrModal;