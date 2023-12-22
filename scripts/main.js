//game
const pitouBatalha =[
    {
        forca:Math.floor(Math.random()*90+10),
        agilidade:Math.floor(Math.random()*80+5),
        inteligencia:Math.floor(Math.random()*97+5),
    }
]
const personagens = [
    {
        nome:"hisoka",
        forca:Math.floor(Math.random()*85+7),
        agilidade:Math.floor(Math.random()*70+5),
        inteligencia:Math.floor(Math.random()*90+5),
        profile:"imagens/hisoka.png"

    },
    {
        nome:"gon",
        forca:Math.floor(Math.random()*100+30),
        agilidade:Math.floor(Math.random()*97+20),
        inteligencia:Math.floor(Math.random()*60+20),
        profile:"imagens/gon2.webp"

    },
    {
        nome:"killua",
        forca:Math.floor(Math.random()*80+10),
        agilidade:Math.floor(Math.random()*99+20),
        inteligencia:Math.floor(Math.random()*80+10),
        profile:"imagens/killua.webp"

    },
    {
        nome:"kurapika",
        forca:Math.floor(Math.random()*70+5),
        agilidade:Math.floor(Math.random()*90+10),
        inteligencia:Math.floor(Math.random()*100+15),
        profile:"imagens/kurapika.webp"

    },
    {
        nome:"leorio",
        forca:Math.floor(Math.random()*65+5),
        agilidade:Math.floor(Math.random()*70+10),
        inteligencia:Math.floor(Math.random()*80+10),
        profile:"imagens/leorio.png"

    },
    {
        nome:"meruem",
        forca:Math.floor(Math.random()*100+10),
        agilidade:Math.floor(Math.random()*95+15),
        inteligencia:Math.floor(Math.random()*100+5),
        profile:"imagens/meruem.png"

    },
    {
        nome:"lucifer",
        forca:Math.floor(Math.random()*90+7),
        agilidade:Math.floor(Math.random()*70+10),
        inteligencia:Math.floor(Math.random()*100+4),
        profile:"imagens/chrollo.png"

    },
    {
        nome:"netero",
        forca:Math.floor(Math.random()*100+15),
        agilidade:Math.floor(Math.random()*80+10),
        inteligencia:Math.floor(Math.random()*95+15),
        profile:"imagens/netero.webp"

    },
    {
        nome:"feitan",
        forca:Math.floor(Math.random()*80+15),
        agilidade:Math.floor(Math.random()*80+10),
        inteligencia:Math.floor(Math.random()*75+15),
        profile:"imagens/feitan.png"

    },
    {
        nome:"kaito",
        forca:Math.floor(Math.random()*85+15),
        agilidade:Math.floor(Math.random()*85+10),
        inteligencia:Math.floor(Math.random()*60+15),
        profile:"imagens/kaito.png"

    },
    {
        nome:"illumi",
        forca:Math.floor(Math.random()*90+15),
        agilidade:Math.floor(Math.random()*70+10),
        inteligencia:Math.floor(Math.random()*90+15),
        profile:"imagens/illumi.webp"

    },
    {
        nome:"ging",
        forca:Math.floor(Math.random()*100+15),
        agilidade:Math.floor(Math.random()*100+10),
        inteligencia:Math.floor(Math.random()*100+15),
        profile:"imagens/ging.webp"

    },
    {
        nome:"biscuit",
        forca:Math.floor(Math.random()*80+15),
        agilidade:Math.floor(Math.random()*70+10),
        inteligencia:Math.floor(Math.random()*88+15),
        profile:"imagens/Biscuit.webp"

    },
    {
        nome:"pouf",
        forca:Math.floor(Math.random()*88+15),
        agilidade:Math.floor(Math.random()*96+10),
        inteligencia:Math.floor(Math.random()*90+15),
        profile:"imagens/pouf.webp"

    },
    {
        nome:"zeno",
        forca:Math.floor(Math.random()*95+15),
        agilidade:Math.floor(Math.random()*70+10),
        inteligencia:Math.floor(Math.random()*85+15),
        profile:"imagens/zeno.webp"

    },
    {
        nome:"uvogin",
        forca:Math.floor(Math.random()*100+15),
        agilidade:Math.floor(Math.random()*88+10),
        inteligencia:Math.floor(Math.random()*50+15),
        profile:"imagens/Uvogin.webp"

    },
    {
        nome:"silva",
        forca:Math.floor(Math.random()*88+15),
        agilidade:Math.floor(Math.random()*100+10),
        inteligencia:Math.floor(Math.random()*80+15),
        profile:"imagens/silva.webp"

    },
    {
        nome:"pouf",
        forca:Math.floor(Math.random()*10+15),
        agilidade:Math.floor(Math.random()*5+10),
        inteligencia:Math.floor(Math.random()*1+15),
        profile:"imagens/tonpa .webp"

    },
]
const sortear = document.getElementById("sortear");
const primeiraTela=document.getElementById("fristscreen");
const segundaTela=document.getElementById("secondscreen");
const telaDeAposta =document.getElementById("telaAposta");
const terceiraTela =document.getElementById("thirdscreen");
let oponente =document.getElementById("oponente");
let profileOponente = document.getElementById("imagemOponente")
let profileOponente2 = document.getElementById("imagemOponente2")
let nomeOponente=document.getElementById("nome")
let nomeOponente2=document.getElementById("nome2")
const pitou =document.getElementById("pitou");
const apostaRandom = document.getElementById("apostarRandom");
const apostaPitou = document.getElementById("apostarPitou");
let forcaOponente = document.getElementById("forcaOponente");
let agilidadeOponente = document.getElementById("agiOponente");
let inteligenciaOponente = document.getElementById("intOponente");
let forcaPitou = document.getElementById("forcaPitou");
let agilidadePitou = document.getElementById("agiPitou");
let inteligenciaPitou = document.getElementById("intPitou");
const resultado = document.getElementById("resultado");
document.querySelector("#sortear").addEventListener('click',function(){
    primeiraTela.style.display='none';
    segundaTela.style.display = 'flex';
    const randomOponenteSort= Math.floor(Math.random() * personagens.length);
    const randomOponente = personagens[randomOponenteSort]
    const randomOponenteSortPitou= Math.floor(pitouBatalha.length);
    const randomOponentePitou = personagens[randomOponenteSortPitou]
    setTimeout(function(){
        segundaTela.style.display = 'none';
        telaDeAposta.style.display = 'flex';

        profileOponente.src=randomOponente.profile;
        nomeOponente.innerHTML=randomOponente.nome;
        
        apostaPitou.addEventListener('click',function(){
            compararPersonagens(personagens[0],randomOponente)
            telaDeAposta.style.display='none';
            terceiraTela .style.display='flex';
            
            profileOponente2.src=randomOponente.profile;
            nomeOponente2.innerHTML=randomOponente.nome;

            forcaPitou.innerHTML =randomOponentePitou.forca
            agilidadeOponente.innerHTML =randomOponentePitou.agilidade
            inteligenciaPitou.innerHTML =randomOponentePitou.inteligencia

            forcaOponente.innerHTML= randomOponente.forca
            agilidadeOponente.innerHTML= randomOponente.agilidade
            inteligenciaOponente.innerHTML= randomOponente.inteligencia
        })
        apostaRandom.addEventListener('click',function(){
            compararPersonagens(randomOponente,personagens[0])
            telaDeAposta.style.display='none';
            terceiraTela .style.display='flex';

            profileOponente2.src=randomOponente.profile;
            nomeOponente2.innerHTML=randomOponente.nome;

            forcaPitou.innerHTML =randomOponentePitou.forca
            agilidadeOponente.innerHTML =randomOponentePitou.agilidade
            inteligenciaPitou.innerHTML =randomOponentePitou.inteligencia

            forcaOponente.innerHTML= randomOponente.forca
            agilidadeOponente.innerHTML= randomOponente.agilidade
            inteligenciaOponente.innerHTML= randomOponente.inteligencia
        })
    }, 2500);
function compararPersonagens(personagemApostado, personagem2) {
    let score1 = 0;
    let score2 = 0;
    
        if (personagemApostado.forca > personagem2.forca) {
            score1++;
            console.log("+1 forca")
        } else if(personagemApostado.forca < personagem2.forca){
            score2++;
        }
    
        if (personagemApostado.resistencia > personagem2.resistencia) {
            score1++;
            console.log("+1 res")
        } else if (personagemApostado.resistencia < personagem2.resistencia){
            score2++;
        }
    
        if (personagemApostado.agilidade > personagem2.agilidade) {
            score1++;
            console.log("+1 agi")
        } else if (personagemApostado.agilidade < personagem2.agilidade){
            score2++;
        }
    
        if (score1 > score2){
            resultado.innerHTML = "VocÊ ganhou";
        } else if( score2 > score1){
            
            resultado.innerHTML = "VocÊ perdeu";
        }else if (score1 === score2){
            resultado.innerHTML= "empate";
        }
    
    }
    
})




//painel
const paineis = document.querySelectorAll('.painel');

paineis.forEach((painel)=>{
    painel.addEventListener('click', () => {
        removeActiveClasses()
        painel.classList.add('active')
    })
})
function removeActiveClasses(){
    paineis.forEach(painel => {
        painel.classList.remove('active')
    })
}
// parte dos walpapers
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}
//trocar tema 
let hunter = document.getElementById("hunter");
let header = document.getElementById("header");
let body = document.querySelector("body");
let main = document.querySelector('main');
let button = document.getElementById('buttonVerde');
let Gon = document.getElementById('Gon');
let gon_rage = document.getElementById('gon-rage');
let span_g = document.getElementById("span_g");
let span_k = document.getElementById("span_k");
let span_ku = document.getElementById("span_ku");
let span_l = document.getElementById("span_l");
let span_n = document.getElementById("span_n");
let killua_rage = document.getElementById('killua-rage');
let kurapika_rage = document.getElementById('kurapika-rage');
let leorio_rage = document.getElementById('leorio-rage');
let netero_rage = document.getElementById('netero-rage');
let wpp1 = document.getElementById("1wpp");
let wpp2 = document.getElementById("2wpp");
let wpp3 = document.getElementById("3wpp");
let wpp4 = document.getElementById("4wpp");
let wpp5 = document.getElementById("5wpp");

hunter.addEventListener('click', function(){
    hunter.src='imagens/aranha-logo.png'
    header.style.backgroundImage="url(imagens/trupe.jpg)"
    header.style.backgroundSize= 'cover'
    header.style.height= 792;

    main.style.backgroundColor ="#F44455";
    button.style.backgroundColor ="#F44455";
   document.body.setAttribute("style","background-color:#F44455; ");

   Gon.src='imagens/chrollo.png'
   Gon.style.paddingLeft= "30px";

   gon_rage.style.backgroundImage ="url(imagens/crhollo-rage.jpg)";
   span_g.innerHTML ="lucifer";

   span_k.innerHTML ="uvogin";
   killua_rage.style.backgroundImage ="url(imagens/uvogin-rage.jpg)";

   span_ku.innerHTML ="feitan";
   kurapika_rage.style.backgroundImage ="url(imagens/feitan-rage.jpg)";

   span_l.innerHTML ="shizuku";
   leorio_rage.style.backgroundImage ="url(imagens/shizuku-rage.jpg)";

   span_n.innerHTML ="nobunaga";
   netero_rage.style.backgroundImage ="url(imagens/nobunaga-rage.jpg)";

   //walpapers
    wpp1.src='imagens/trupe2.jpg'
    wpp2.src='imagens/trupe3.jpg'
    wpp3.src='imagens/trupe4.jpg'
    wpp4.src='imagens/trupe5.png'
    wpp5.src='imagens/trupe6.jpg'

   
    
    
    console.log('clicou')
})

// resetar o game
let resetar = document.getElementById("resetar");
resetar.addEventListener('click', function(){
    terceiraTela.style.display='none';
    primeiraTela.style.display='flex';
})