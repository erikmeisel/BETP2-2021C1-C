/**
 * Dado un string s que contiene solo los caracteres 
 * '(', ')','{','}', '[' y ']' determinar si el string enviado es valido
 * 
 * Un string es valido si
 * 1.- Todas las aperturas ( { y [ tienen su cierre.
 * 2.- Todos los cierres estan en el orden correcto 
 * 
 */

/**
 * 
 * @param {string} s 
 * @return {boolean}
 */
const isValid = function(s){
    let pares = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let pila = []
    for (let i = 0; i<s.length;i++){
        let v = s[i]
        if (v=="(" || v == "{" || v == "[") {
            pila.push(v)
        }
        if (v==")" || v == "}" || v == "]") {
            let coso = pila.pop()
            if (v != pares[coso]) return false
        }
    }
    if (pila.length>0) return false
    return true 
};

// TESTS
console.log(isValid('()') === true);
console.log(isValid('()[]{}')=== true);
console.log(isValid('(}') === false);
console.log(isValid('([)]') === false);
console.log(isValid('{}{}(){[()]}') === true);