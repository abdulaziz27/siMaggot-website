import React from 'react';
import { useEffect, useState } from "react";
import "./chat.css";
import { Icon } from "@iconify/react";

import Navbar from "../../components/navbar/navbar";
import HeaderLogin from "../../components/header/header_login";
import Footer from "../../components/footer/footer";

import chatLogo from "../../assets/chat/chat.png";
import photoProfile1 from "../../assets/product/img4.png";
import photoProfile2 from "../../assets/product/img1.png";
import photoProfile3 from "../../assets/product/img2.png";
import photoProfile4 from "../../assets/product/img3.png";

const Chat = () => {    

    const [currentContact, setCurrentContact] = useState('none');
    const [searchTerm, setSearchTerm] = useState('');

    const dataKontak = [
        { foto: photoProfile1, username: "username",  date: "09 Nov", },
        { foto: photoProfile2, username: "username2",  date: "10 Nov", },
        { foto: photoProfile3, username: "username3",  date: "20 Nov", },
        { foto: photoProfile4, username: "username4",  date: "30 Nov", },
    ];

    const contacts = {
        none: [

        ],
        username: [
            { date: '08 November 2023', message: 'Hi, Terima Kasih sudah melihat toko kami! Kami melihat ada beberapa produk yang berada di keranjang belanjamu. Ayo proses pesananmu selagi stok masih ada!', from: 'username' },
            { date: '08 November 2023', message: 'baik', from: 'user' },
            { date: '09 November 2023', message: 'Hi, Terima Kasih sudah mempercayakan toko kami untuk membeli barang dari kami!', from: 'username' },
            { date: '09 November 2023', message: 'Jangan lupa dibayar', from: 'username' },
            { date: '09 November 2023', message: 'ok', from: 'user' },
            { date: '09 November 2023', message: 'Hi, Terima Kasih sudah mempercayakan toko kami untuk membeli barang dari kami!', from: 'username' },
            { date: '09 November 2023', message: 'Jangan lupa dibayar', from: 'username' },
            { date: '09 November 2023', message: 'Hi, Terima Kasih sudah melihat toko kami! Kami melihat ada beberapa produk yang berada di keranjang belanjamu. Ayo proses pesananmu selagi stok masih ada!', from: 'user' },
            { date: '09 November 2023', message: 'Hi, Terima Kasih sudah mempercayakan toko kami untuk membeli barang dari kami!', from: 'username' },
            { date: '09 November 2023', message: 'Jangan lupa dibayar', from: 'username' },
            { date: '09 November 2023', message: 'ok', from: 'user' },
        ],
        username2: [
            { date: '12 December 2023', message: 'chat2', from: 'username2' },
            { date: '12 December 2023', message: 'balas2', from: 'user' },
            { date: '18 December 2023', message: 'chat2', from: 'username2' },
            { date: '18 December 2023', message: 'balas2', from: 'user' },
            { date: '18 December 2023', message: 'Chat2', from: 'username2' },
            { date: '18 December 2023', message: 'balas2', from: 'user' },
        ],
        username3: [
            { date: '08 November 2023', message: 'cha3', from: 'username3' },
            { date: '09 November 2023', message: 'chat3', from: 'username3' },
            { date: '09 November 2023', message: 'chat3', from: 'username3' },
            { date: '09 November 2023', message: 'balas3', from: 'user' },
            { date: '09 November 2023', message: 'chat3', from: 'username3' },
            ],
        username4: [
            { date: '12 December 2023', message: 'chat4', from: 'username4' },
            { date: '12 December 2023', message: 'balas4', from: 'user' },
            { date: '18 December 2023', message: 'chat4', from: 'username4' },
            { date: '18 December 2023', message: 'balas4', from: 'user' },
            { date: '18 December 2023', message: 'chat4', from: 'username4' },
            { date: '18 December 2023', message: 'balas4', from: 'user' },
        ],
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredContacts = dataKontak.filter((kontak) =>
        kontak.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleChangeContact = (contact) => {
        setCurrentContact(contact);
    };

    const getImage = (username) => {
        const foundContact = dataKontak.find(contact => contact.username === username);
        return foundContact ? foundContact.foto : null;
    };

    const getLastChat = (username) => {
        const pesanKontak = contacts[username];
        const pesanTerakhir = pesanKontak.length > 0 ? pesanKontak[pesanKontak.length - 1].message : '';
        const lastDate = pesanKontak.length > 0 ? pesanKontak[pesanKontak.length - 1].date : '';
        const formattedDate = new Date(lastDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
        return {
            pesanTerakhir: pesanTerakhir,
            isYou: pesanKontak.length > 0 && pesanKontak[pesanKontak.length - 1].from === 'user',
            lastDate: formattedDate,
          };
    };

    return (
      <>
        <Navbar />
        <HeaderLogin />
        <div className="chat"> 
            <h1 className='judulSesi'>Chat</h1>
            <div className='chat-container'>
                <div className='kontak'>
                    <div className='cariKontak'>
                        <div className='searchbar'>
                            <Icon icon="iconamoon:search" className="search-icon" />
                            <input
                                className="search-input"
                                type="text"
                                placeholder="Cari"
                                name="search"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            ></input>
                        </div>
                        <div className='filter'>
                            <span><Icon icon="ion:filter" /></span>
                        </div>
                    </div>
                    <div className='listKontak'>
                        {filteredContacts.map((kontak, index) => (
                            <div className="kontakContainer" key={index} onClick={() => handleChangeContact(kontak.username)}>
                                <img src={kontak.foto} alt="Foto kontak" />
                                <div className="isiKontak">
                                    <h4 className="namaKontak">{kontak.username}</h4>

                                    {getLastChat(kontak.username).isYou ? (
                                        <p className="previewChat">You: {getLastChat(kontak.username).pesanTerakhir}</p>
                                    ) : (
                                        <p className="previewChat">{getLastChat(kontak.username).pesanTerakhir}</p>
                                    )}

                                </div>
                                <div className='lastOnline'>
                                    <p>{getLastChat(kontak.username).lastDate}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='konten'>

                    {currentContact === "none" && (
                        <div className='tidakChat'>
                            <div className='sambutChat'>
                                <img src={chatLogo} alt="women" />
                                <h2>Selamat Datang di Chat</h2>
                                <p>Pilih pesan untuk memulai percakapan</p>
                            </div>
                        </div>
                    )}
                    
                    {currentContact !== "none" && (
                        <div className='adaChat'>
                            <div className='headerChat'>
                                <img src={getImage(currentContact)} alt="Foto Profil" />
                                <h3 className='namaKontak'>{currentContact}</h3>
                            </div>
                            <div className="isiChat">
                                {contacts[currentContact].map((chat, index) => (
                                    <div key={index} className={chat.from === 'user' ? 'user-message' : 'contact-message'}>
                                        <p>{chat.message}</p>
                                        <p className={chat.from === 'user' ? 'user-date' : 'contact-date'}>{chat.date}</p>
                                </div>
                                ))}
                            </div>
                            <div className='tulisChat'>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Tulis pesan untuk penjual disini ...'></textarea>
                                <button className='kirimPesan'><Icon icon="iconoir:send" /></button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
        <Footer />
      </>
    
  )
}


export default Chat;