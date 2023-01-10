import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import React, { useState, useEffect } from 'react'

function MessagePage (){
    // This deals with the state of the message that we simply
    // show to the user, along with the relevant effect
    const [regularMessage, setRegularMessage] = useState("");
    useEffect( () => {
        const doit = async () => {
            let message = await getRegularMessage();
            setRegularMessage(message);
            console.log("HI")
        };
        doit();
    },
    []
    );
    
    // This deals with user's text input and then the reversing
    // of this input
    const [messageToReverse, setMessageToReverse] = useState("");
    const [reversedMessage, setReversedMessage] = useState("");

    return (
        <div className={styles.container}>
            <Head>
            <title>Messages Page</title>
            <meta name="description" content="Written by Neloy" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
    
            <main className={styles.main}>
            <h1 className={styles.title}>
                This is the messages page!
            </h1>
            <h2>
                Arbitrary Message: {regularMessage}
            </h2>
            <h2>
                Text you want to reverse: <input type="text" value={messageToReverse} onChange={(e) => setMessageToReverse(e.target.value)} />
            </h2>
            <button onClick = {async () => {
                let message = await getReversedMessage(messageToReverse);
                setReversedMessage(message);
            }}>
                Reverse Message
            </button>
                <h2>
                    Reversed message: {reversedMessage}
                </h2>
            </main>
    
            
        </div>
        )
};

async function getRegularMessage() {
    let response = await fetch('http://localhost:3000/api/message', {method: 'GET'});
    let json = await response.json(); // Because response.json is a promise as well
    return json.message
}

async function getReversedMessage(input) {
    let response = await fetch('http://localhost:3000/api/message?input=' + input, {method: 'POST'})
    let json = await response.json(); // Because response.json is a promise as well
    return json.message
}

export default MessagePage;