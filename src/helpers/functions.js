export function getElementsFor(type){
    let elements = document.querySelectorAll(`[${type}]`)

    return [...elements];
}