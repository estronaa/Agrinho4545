function mostrarMensagem(){
    alert(
        "O futuro sustentável depende do equilíbrio entre produção agrícola e preservação ambiental!"
    );
}

let numero = 0;
const contador = document.getElementById("contador");

function animarContador(){

    const intervalo = setInterval(() => {

        numero += 25;

        contador.textContent =
        numero.toLocaleString('pt-BR');

        if(numero >= 10000){
            clearInterval(intervalo);
        }

    }, 20);

}

const observer = new IntersectionObserver((entries)=>{

    if(entries[0].isIntersecting){
        animarContador();
        observer.disconnect();
    }

});

observer.observe(document.querySelector(".contador"));
