let isIgnite = true
function changeCard(event) {
    const card = event.currentTarget
    /* IF ternário
    Se isIgnite == true então o background vira bg-explorer se não vira bg-ignite */
    const bg = isIgnite ? "explorer" : "ignite"
    /* Se isIgnite for true converte para false e se for false converte para true */
    isIgnite = !isIgnite
    card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`
    
}