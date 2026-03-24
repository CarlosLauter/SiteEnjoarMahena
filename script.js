function desvia(t) {
    let butao = t
    t.style.position = 'absolute';
    t.style.bottom = geraPosicao(10, 90);
    t.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + '%'
}

