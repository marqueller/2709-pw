'use client'

import React, { useEffect, useState, useMemo } from 'react';

const TextRotator = () => {
    const texts = useMemo(() => [
        "Universe Petshop: Onde o Amor pelos Animais Ganham Vida",
        "Universe Petshop: Tudo que Seu Pet Precisa",
        "Universe Petshop: O Conforto para Seu Melhor Amigo"
    ], []);

    const [currentText, setCurrentText] = useState(texts[0]);
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true); 

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Inicia o fade-out
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setFade(true); // Inicia o fade-in após a troca de texto
            }, 500); // Duração do fade-out
        }, 4000); 

        return () => clearInterval(interval);
    }, [texts.length]);

    useEffect(() => {
        setCurrentText(texts[index]);
    }, [index, texts]);

    return (
        <h1
            className={`text-center text-4xl uppercase mt-16 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
            {currentText}
        </h1>
    );
};

export default TextRotator;
