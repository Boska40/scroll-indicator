window.addEventListener('scroll', remplir);

function remplir(){
    // ce qu'on a scrollé
    let winScroll=document.documentElement.scrollTop;

    // hauteur totale  - hauteur de la fenetre du client (partie visible)
    let height=document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled=(winScroll/height)*100;

    document.getElementById('myBar').style.width=scrolled+'%';
}