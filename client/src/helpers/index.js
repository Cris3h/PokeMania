import axios, { all } from "axios";

export const powerHigherToLower = (payload) => {
    const order = payload.sort((a, b) => {
        if (a.attack > b.attack) return 1
        if (a.attack < b.attack) return -1
        return 0
    })
    return order
};

export const powerLowerToHigher = (payload) => {
    const order = payload.sort((a, b) => {
        if (a.attack < b.attack) return 1
        if (a.attack > b.attack) return -1
        return 0
    })
    return order
}

export function sortByPower(allpokemons, payload) {
    const state = [...allpokemons]
    return payload === 'HtL'
        ? powerHigherToLower(state)
        : powerLowerToHigher(state)
}

const aToZ = (payload) => {   
    return payload.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        return 0
    })
}

const zToA = (payload) => {
    return payload.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
        return 0
    })
}

export function sortByName(allpokemons, payload) {
    console.log('3- entro al helpers --> ', allpokemons, payload);
    const order = [...allpokemons];
    return payload === 'a-z'
    ? aToZ(order)
    : zToA(order)
}

export const filterByType = (allpokemons, payload) => {
    console.log('3- entro al helpers --> ', allpokemons, payload);
    return payload === 'all'
    ? allpokemons
    : allpokemons.filter((poke) => poke.type.includes(payload) === true) 
}