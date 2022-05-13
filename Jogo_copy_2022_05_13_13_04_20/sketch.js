//Variáveis tela inicial

var animação = 0
var tela = 0;
var nivel = 0;
var largura = 200;
var altura = 50;
var xmenu = 300;
var ymenu1 = 225;
var ymenu2 = 290;
var ymenu3 = 355;
var imagemeducador;
var imagemprogramador;

//Carregador de imagens, áudios...

function preload() {
  imagemeducador = loadImage("educadora.jpeg");
  imagemprogramador = loadImage("programador.jpeg");
    papeldeparede = loadImage("fundo.jpeg");
    papeldeparedemouse = loadImage("fundo mouse.png");
   papeldeparedeazul = loadImage("tela azul.png");
}

//FUNÇÕES
//FUNÇÃO BOTÃO MENU


function retangulo(xmenu,ymenu,opcao){
   if (mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu && mouseY < ymenu + altura) {
      stroke(200);
      noFill();
      rect(xmenu, ymenu, largura, altura, 6);
      if (mouseIsPressed) {
        opcaoSelecionada = opcao;
      } 
    }
    else{
      noFill()
    }
}



//FUNÇÃO TEXTO BOTÃO
function textobotao(texto,xmenu,ymenu){
  
    textSize(25)
    fill(240);
    noStroke();
    text(texto,xmenu, ymenu);
  
}

//FUNÇÃO VOLTAR

function voltar(texto){
  
   if (mouseX > 40 && mouseX < 40 + 95 && mouseY > 440 && mouseY < 440 + 30) {
      stroke(200);
      noFill()
      rect(40, 440, 95, 30, 6);
      if (mouseIsPressed) {
        tela = 0;
      }
    }

    textSize(17);
    noStroke();
    fill(250);
    text(texto,65,460);

  
  
}

//FUNÇÃO FASE FÁCIL

function facil(){
  
}

function setup() {
  createCanvas(800, 500);
 
}


function draw() {
  
  cursor(HAND)
 
  // TELA MENU
  
  if(tela==0){



    background(0)

    textFont("fantasy")
    textSize(60);
    fill(250)

      image( papeldeparede , 0, 0, 800, 500);

    if(animação<280){
    text("MATH ten",animação, 150)
    animação = animação + 3
    }
    else{
    text("MATH ten",280, 150)
    }

    opcaoSelecionada = 0;
    retangulo(xmenu,ymenu1,1)
    textobotao("Iniciar",363,258)

    retangulo(xmenu,ymenu2,2)
    textobotao("Instruções",340,322)

    retangulo(xmenu,ymenu3,3)
    textobotao("Créditos",350,390)


  }

  // TELA INICIAR
  
   if(tela==1){
    
     background(0);

      image( papeldeparede , 0, 0, 800, 500);
    textFont("fantasy")
    textSize(50);
    noStroke()
    fill(255);
     
      text("Nível de dificuldade",180, 150)

    retangulo(xmenu,ymenu1,1)
    textobotao("Fácil",363,258)
    
    retangulo(xmenu,ymenu2,2)
    textobotao("Médio",360,322)
    
    retangulo(xmenu,ymenu3,3)
    textobotao("Difícil",360,390)
    
    voltar("voltar")
    
    
  }
  
  //TELA INSTRUÇÕES
  
  if(tela==2){
    
    background(0);
    
     image( papeldeparedemouse , 0, 0, 800, 500);
    
    textSize(50);
    fill(250);
    textFont("serif")
    text("Instruções", 266, 100);

    textSize(20);
    fill(250);
    text("1° - Use o mouse para selecionar as opções.", 100, 150)
    text("2° - Para sair do jogo, clique com o mouse no botão sair.",100,170)
    text("Resumo:",100,280)
    text("Jogo de perguntas e respostas objetivas envolvendo manipulações algébricas, utilizando as propriedades das operações. ",100,300,400,480)
    
    
     voltar("voltar")
    
  }
  
  //TELA CRÉDITOS
  
  if(tela==3){
    
    background(47,79,79);
    textFont("serif")
    
    image( papeldeparedeazul , 0, 0, 800, 500);

    textSize(50);
    fill(255);
    noStroke();
    text("Créditos", 285, 75);
    
    textSize(27);
    fill(250)
    text("Bárbara Tavares",395 , 120);
    textSize(15);
    fill(250)
    text("Função: Educador", 425, 140);
    fill(250)
    textSize(15);
    text("Licenciada em Matemática pela Universidade do Estado do Rio Grande " + "do Norte/ UERN. Especialista em Ensino de Matemática pela Univerci-" + " dade do Estado do Rio Grande do Norte/UERN.", 250, 160, 480);
    image(imagemeducador,100, 90, 100, 150);
  
    textSize(27);
    text("Vinícius Yan", 420, 260);
    textSize(15);
    text("Função: Programador", 420, 280);
    textSize(15);
    text("Estudante do Bacharelado em Ciências e Tecnologias pela Universi-" + "\n" + "dade Federal do Rio Grande do Norte/ UFRN. Técnico em Logística " + "\n" + "pela Universidade Federal do Rio Grande do Norte - Escola Agrícula " + "\n" + "de Júndiai/ EAJ/UFRN.", 250, 300, 480);
    image(imagemprogramador, 90, 250, 120, 120);
  
     voltar("Voltar") 
    
  }
  
  
  
  
  //JOGANDO 
  
  //FÁCIL
  else if(tela==4){
    image( papeldeparede , 0, 0, 800, 500);

    
    textSize(50);
    fill(250);
    textFont("serif")
    text("Jogando nível fácil", 266, 100);
    
     voltar("Sair") 

  }
 
  
  //MÉDIO
   else if(tela==5){
    image( papeldeparede , 0, 0, 800, 500);

    
    textSize(50);
    fill(250);
    textFont("serif")
    text("Jogando nível Médio", 266, 100);
     
      voltar("Sair") 

  }
  
  
  //DIFÍCIL
   else if(tela==6){
    image( papeldeparede , 0, 0, 800, 500);

    
    textSize(50);
    fill(250);
    textFont("serif")
    text("Jogando nível difcil", 266, 100);
     
     voltar("Sair") 

  }
}

function mouseClicked(){
  if (tela == 0) {
    if ( opcaoSelecionada == 1 ){
      tela = 1; 
    }
    if ( opcaoSelecionada == 2 ){
      tela = 2; 
    }
    if ( opcaoSelecionada == 3 ){
      tela = 3; 
    }
  }
  else {
     if (tela == 1) {
       // Fácil
       if ( opcaoSelecionada == 1 ){
          tela = 4; 
        }
        // Médio 
        if ( opcaoSelecionada == 2 ){
          tela = 5; 
        }
        //Dificil
       if ( opcaoSelecionada == 3 ){
          tela = 6; 
        }
      }
  }
}