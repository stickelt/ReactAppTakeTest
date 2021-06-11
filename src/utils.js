export function obfuscate(card) {
    const target = card.replace(/\d(?=\d{4})/g, "*");
    return target;
}

export function updatedCard(start, finish){
    if(start === finish){ 
        return false; // no change
    }else{ return true; } // Updated
}