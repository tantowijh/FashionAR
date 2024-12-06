import './App.css';
import React, { useState } from 'react';
import Layout from './components/Layout';
import QrModal from './components/QrModal';

function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [qrSrc, setQrSrc] = useState('');

  const showQrModal = (src) => {
    setQrSrc(src);
    setModalVisible(true);
  };

  const hideQrModal = () => {
    setModalVisible(false);
  };

  return (
    <Layout>
      <section className="section py-28 bg-gray-100" id="home">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <img src={`${process.env.PUBLIC_URL}/Assets/images/logo.svg`} className="mx-auto h-9" alt="Logo" />
              <h1
                className="text-4xl font-bold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-2 mt-5 max-w-2xl">
                FashionAR - Menjual berbagai macam fashion dengan teknologi AR
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 relative">
        <div className="divide-y divide-gray-200 space-y-12">
          <div>
            <h2 className="text-4xl font-medium text-center my-10">Fashion</h2>
            <div className="container">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

                <div className="bg-white shadow-md rounded-xl overflow-hidden group">
                  <div className="relative">
                    <img src={`${process.env.PUBLIC_URL}/Assets/images/hoodie.png`} alt="Hoodie" />
                    <div className="absolute inset-y-0 flex items-center -end-20 group-hover:end-1 duration-500 m-2">
                      <div className="p-2">
                        <ul className="mb-4 space-y-2 flex flex-col items-center justify-end p-4">
                          <li>
                            <button className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-red-100 bg-opacity-80">
                              <i className="ti ti-heart text-xl text-red-600"></i>
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => showQrModal(`${process.env.PUBLIC_URL}/Assets/images/hoodie_qr.png`)}
                              className="qrModalOpener h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-blue-100 bg-opacity-80">
                              <i className="ti ti-eye text-xl text-blue-600"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 relative">
                    <div className="mb-2">
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Hoodie</h2>
                    <p className="text-sm mb-3">
                      Hoodie dengan bahan yang nyaman digunakan sehari-hari dan cocok untuk berbagai acara santai anda.
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-3xl font-semibold text-gray-950 flex items-center gap-2">
                          Rp. 200,000
                          <span className="text-xs font-semibold line-through text-red-500">
                            Rp. 250,000
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="absolute start-0 end-0 -bottom-20 group-hover:bottom-1 duration-500 m-2">
                      <div className="p-2">
                        <button className="py-2.5 w-full flex items-center justify-center rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-all duration-500">
                          Tambahkan ke keranjang
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-md rounded-xl overflow-hidden group">
                  <div className="relative">
                    <img src={`${process.env.PUBLIC_URL}/Assets/images/tshirt.png`} alt="T-shirt" />
                    <div className="absolute inset-y-0 flex items-center -end-20 group-hover:end-1 duration-500 m-2">
                      <div className="p-2">
                        <ul className="mb-4 space-y-2 flex flex-col items-center justify-end p-4">
                          <li>
                            <button className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-red-100 bg-opacity-80">
                              <i className="ti ti-heart text-xl text-red-600"></i>
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => showQrModal(`${process.env.PUBLIC_URL}/Assets/images/tshirt_qr.png`)}
                              className="qrModalOpener h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-blue-100 bg-opacity-80">
                              <i className="ti ti-eye text-xl text-blue-600"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 relative">
                    <div className="mb-2">
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">T-shirt</h2>
                    <p className="text-sm mb-3">
                      T-shirt dengan bahan yang nyaman digunakan sehari-hari dan cocok untuk berbagai acara santai anda.
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-3xl font-semibold text-gray-950 flex items-center gap-2">
                          Rp. 150,000
                          <span className="text-xs font-semibold line-through text-red-500">
                            Rp. 180,000
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="absolute start-0 end-0 -bottom-20 group-hover:bottom-1 duration-500 m-2">
                      <div className="p-2">
                        <button className="py-2.5 w-full flex items-center justify-center rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-all duration-500">
                          Tambahkan ke keranjang
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-md rounded-xl overflow-hidden group">
                  <div className="relative">
                    <img src={`${process.env.PUBLIC_URL}/Assets/images/bottoms.png`} alt="Bottoms" />
                    <div className="absolute inset-y-0 flex items-center -end-20 group-hover:end-1 duration-500 m-2">
                      <div className="p-2">
                        <ul className="mb-4 space-y-2 flex flex-col items-center justify-end p-4">
                          <li>
                            <button className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-red-100 bg-opacity-80">
                              <i className="ti ti-heart text-xl text-red-600"></i>
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => showQrModal(`${process.env.PUBLIC_URL}/Assets/images/bottoms_qr.png`)}
                              className="qrModalOpener h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-blue-100 bg-opacity-80">
                              <i className="ti ti-eye text-xl text-blue-600"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 relative">
                    <div className="mb-2">
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Bottoms</h2>
                    <p className="text-sm mb-3">
                      Bottoms dengan bahan yang nyaman digunakan sehari-hari dan cocok untuk berbagai acara santai anda.
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-3xl font-semibold text-gray-950 flex items-center gap-2">
                          Rp. 150,000
                          <span className="text-xs font-semibold line-through text-red-500">
                            Rp. 170,000
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="absolute start-0 end-0 -bottom-20 group-hover:bottom-1 duration-500 m-2">
                      <div className="p-2">
                        <button className="py-2.5 w-full flex items-center justify-center rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-all duration-500">
                          Tambahkan ke keranjang
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-md rounded-xl overflow-hidden group">
                  <div className="relative">
                    <img src={`${process.env.PUBLIC_URL}/Assets/images/beaniehat.png`} alt="Beanie Hat" />
                    <div className="absolute inset-y-0 flex items-center -end-20 group-hover:end-1 duration-500 m-2">
                      <div className="p-2">
                        <ul className="mb-4 space-y-2 flex flex-col items-center justify-end p-4">
                          <li>
                            <button className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-red-100 bg-opacity-80">
                              <i className="ti ti-heart text-xl text-red-600"></i>
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => showQrModal(`${process.env.PUBLIC_URL}/Assets/images/beaniehat_qr.png`)}
                              className="qrModalOpener h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-blue-100 bg-opacity-80">
                              <i className="ti ti-eye text-xl text-blue-600"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 relative">
                    <div className="mb-2">
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Beanie Hat</h2>
                    <p className="text-sm mb-3">
                      Beanie hat dengan bahan yang nyaman digunakan sehari-hari dan cocok untuk berbagai acara santai anda.
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-3xl font-semibold text-gray-950 flex items-center gap-2">
                          Rp. 100,000
                          <span className="text-xs font-semibold line-through text-red-500">
                            Rp. 120,000
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="absolute start-0 end-0 -bottom-20 group-hover:bottom-1 duration-500 m-2">
                      <div className="p-2">
                        <button className="py-2.5 w-full flex items-center justify-center rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-all duration-500">
                          Tambahkan ke keranjang
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-md rounded-xl overflow-hidden group">
                  <div className="relative">
                    <img src={`${process.env.PUBLIC_URL}/Assets/images/puffer.png`} alt="Puffer Jacket" />
                    <div className="absolute inset-y-0 flex items-center -end-20 group-hover:end-1 duration-500 m-2">
                      <div className="p-2">
                        <ul className="mb-4 space-y-2 flex flex-col items-center justify-end p-4">
                          <li>
                            <button className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-red-100 bg-opacity-80">
                              <i className="ti ti-heart text-xl text-red-600"></i>
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => showQrModal(`${process.env.PUBLIC_URL}/Assets/images/puffer_qr.png`)}
                              className="qrModalOpener h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-blue-100 bg-opacity-80">
                              <i className="ti ti-eye text-xl text-blue-600"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 relative">
                    <div className="mb-2">
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                      <i className="ti ti-star-filled text-yellow-300"></i>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Puffer Jacket</h2>
                    <p className="text-sm mb-3">
                      Puffer jacket dengan bahan yang nyaman digunakan sehari-hari dan cocok untuk berbagai acara santai anda.
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-3xl font-semibold text-gray-950 flex items-center gap-2">
                          Rp. 350,000
                          <span className="text-xs font-semibold line-through text-red-500">
                            Rp. 390,000
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="absolute start-0 end-0 -bottom-20 group-hover:bottom-1 duration-500 m-2">
                      <div className="p-2">
                        <button className="py-2.5 w-full flex items-center justify-center rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-all duration-500">
                          Tambahkan ke keranjang
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <QrModal isVisible={isModalVisible} qrSrc={qrSrc} onClose={hideQrModal} />
      </section>
    </Layout>
  );
}

export default App;