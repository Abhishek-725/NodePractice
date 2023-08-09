#!/usr/bin/env node
console.log('tutorial cli...');

const movies = async(pokimonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokimonName}`);
    console.log(response);
}
movies('charmandar');