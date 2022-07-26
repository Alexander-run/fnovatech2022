import { Button as Button } from 'antd';
import React, { useEffect, useState } from 'react';
import './contactPage.css';
import axios from 'axios';

export default function Contact()  {

    const [name,setName] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [address,setAddress] = useState('');

    const onHandleClick = () => {   
        let data = {
            'userName':`${name}`,
            'mobile':`${phoneNumber}`,
            'email':`${email}`,
            'message':`${message}`,
            'address':`${address}`
        }

        axios.post(`https://fnovatech.uc.r.appspot.com/mail`,data) 
        .then(response =>{
            let resMessage = response.data.message;
            alert(resMessage);
            console.log(response.data.requestBody)
        })
        .catch((e) => {
            console.log(e);
            alert('Sorry! Some error happened! Please try again or give us a call!')
        })
    }
    
    const onHandleNameChange = (e) => {
       setName(e.target.value);
    }
    const onHandleMobileChange = (e) => {
        setPhoneNumber(e.target.value);
    }
    const onHandleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const onHandleAddressChange = (e) => {
        setAddress(e.target.value);
    }
    const onHandleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div class='contact'>
            <h1>Drop us a line!</h1>
            <input 
                class='singleInput'
                type='text'
                placeholder='Name*'
                autoFocus='autofocus'
                value={name}
                onChange={onHandleNameChange}
            />
            <input 
                class='singleInput'
                type='text'
                placeholder='Mobile*'
                value={phoneNumber}
                onChange={onHandleMobileChange}
            />
            <input 
                class='singleInput'
                type='email'
                placeholder='Email*'
                value={email}
                onChange={onHandleEmailChange}
            />
            <input 
                class='singleInput'
                type='text'
                placeholder='Address'
                value={address}
                onChange={onHandleAddressChange}
            />
            <input 
                class='richInput'
                type='text'
                placeholder='Message'
                value={message}
                onChange={onHandleMessageChange}
            />
            <Button 
            type='primary'
            onClick={onHandleClick}>Send a Message</Button>
        </div>        
    );
}

