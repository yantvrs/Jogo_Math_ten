//funções de cada tela

//tela = 0  Menu 
//tela = 1  Nível de dificuldade 
//tela = 2  Instruções 
//tela = 3  Créditos
//tela = 17 Parabéns facil
//tela = 7  avisando que errou

//tela = 4  pergunta 1 facil
//tela = 8  pergunta 2 facil
//tela = 9  pergunta 3 facil
//tela = 10  pergunta 4 facil
//tela = 11  pergunta 5 facil
//tela = 12  pergunta 6 facil
//tela = 13  pergunta 7 facil
//tela = 14  pergunta 8 facil
//tela = 15  pergunta 9 facil
//tela = 16  pergunta 10 facil

//tela = 5 pergunta 1 médio
//tela = 19 pergunta 2 médio
//tela = 20 pergunta 3 médio
//tela = 21 pergunta 4 médio
//tela = 22 pergunta 5 médio
//tela = 23 pergunta 6 médio
//tela = 24 pergunta 7 médio
//tela = 25 pergunta 8 médio
//tela = 26 pergunta 9 médio
//tela = 27 pergunta 10 médio





//Variaveis tela inicial

var animação = 0;
var tela = 0;
var nivelfacil = 1;
var fase = 1;
var largura = 200;
var altura = 50;
var xmenu = 300;
var ymenu1 = 225;
var ymenu2 = 290;
var ymenu3 = 355;

//var Imagens

var imagemeducador;
var imagemprogramador;
var papeldeparede;
var papeldeparedemouse;
var papeldeparedeazul;
var pergunta1f;
var pergunta2f;
var pergunta3f;
var pergunta4f;
var pergunta5f;
var pergunta6f;
var pergunta7f;

var pergunta1m;
var pergunta2m;
var pergunta3m;
var pergunta4m;
var pergunta5m;
var pergunta5m;
var pergunta7m;
var pergunta8m;
var pergunta9m;
var pergunta10m;


//Carregador de imagens, áudios...

function preload() {
  imagemeducador = loadImage("educadora.jpeg");
  imagemprogramador = loadImage("programador.jpeg");
    papeldeparede = loadImage("papeldeparede.png");
    papeldeparedemouse = loadImage("papeldeparedeinstruções.png");
   papeldeparedeazul = loadImage("tela azul.png");
  
  //Imagens perguntas nível 1 
  pergunta1f = loadImage("pergunta1f.png")
  pergunta2f = loadImage("pergunta2f.png")
  pergunta3f = loadImage("pergunta3f.png")
  pergunta4f = loadImage("pergunta4f.png")
  pergunta5f = loadImage("pergunta5f.png")
  pergunta6f = loadImage("pergunta6f.png")
  pergunta7f = loadImage("pergunta7f.png")
  pergunta8f = loadImage("pergunta8f.png")
  pergunta9f = loadImage("pergunta9f.png")
  pergunta10f = loadImage("pergunta10f.png")
  
  //Imagens perguntas nível 2
  pergunta1m = loadImage("pergunta1m.png")
  pergunta2m = loadImage("pergunta2m.png")
  pergunta3m = loadImage("pergunta3m.png")
  pergunta4m = loadImage("pergunta4m.png")
  pergunta5m = loadImage("pergunta5m.png")
  pergunta6m = loadImage("pergunta6m.png")
  pergunta7m = loadImage("pergunta7m.png")
  pergunta8m = loadImage("pergunta8m.png")
  pergunta9m = loadImage("pergunta9m.png")
  pergunta10m = loadImage("pergunta10m.png")
  
  
  
}

//FUNÇÕES
//FUNÇÃO BOTÃO MENU
//FUNÇAO RETANGULO MENU

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

//FUNÇÃO Tela PERGUNTA


//Perguntas 
function pergunta(texto){

    textFont("fantasy");
    textSize(50);
    noStroke();
    fill(255);
     
    text(texto,50, 90) 
}

//FUNCAO RETANGULO JOGO


function retangulojogo(xmenu,ymenu,larguraretangulojogo,alturaretangulojogo,opcao){
    
  
  
  if (mouseX > xmenu && mouseX < xmenu + larguraretangulojogo && mouseY > ymenu && mouseY < ymenu + alturaretangulojogo) {
      stroke(255)
      noFill()
      rect(xmenu, ymenu, larguraretangulojogo, alturaretangulojogo, 6);
      if (mouseIsPressed) {
        opcaoSelecionada = opcao;
      } 
    }
    else{
      noFill()
    }
}

//FUNÇÃO GAME OVER

function voceerrou(){
  image( papeldeparede , 0, 0, 800, 500);
    textFont("fantasy")
    textSize(50);
    noStroke()
    fill(255);
     
      text("Game over",300, 250)
}

//FUNÇÃO PARABÉNS

function parabens(texto){
  
    image( papeldeparede , 0, 0, 800, 500);
    textFont("fantasy")
    textSize(50);
    noStroke()
    fill(255);
     
      text(texto,300, 250)
  
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
 opcaoSelecionada = 0 
    retangulo(xmenu,ymenu1,1)
    textobotao("nível 1",363,258)
    
    retangulo(xmenu,ymenu2,2)
    textobotao("nível 2",360,322)
    
   
    
    voltar("voltar")
    
    
  }
  
  //TELA ISNTRUÇÕES
  
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
    text(" O Math ten é um jogo de perguntas e respostas objetivas, envolvendo operações matemáticas e manipulações algébricas. O jogo é separado em dois níveis de dificuldade, cada nível possui dez questões.",100,300,473)
    
    
     voltar("voltar")
    
  }
  
  //TELA CREDITOS
  
  if(tela==3){
     opcaoSelecionada = 0 
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
    text("Licenciada em Matemática pela Universidade do Estado do Rio Grande do Norte/ UERN. Especialista em Ensino de Matemática pela Universidade do Estado do Rio Grande do Norte/UERN.", 250, 160, 480);
    image(imagemeducador,100, 90, 100, 150);
  
    textSize(27);
    text("Vinícius Yan", 420, 260);
    textSize(15);
    text("Função: Programador", 420, 280);
    textSize(15);
    text("Estudante do Bacharelado em Ciências e Tecnologias pela Universidade Fede-  ral do Rio Grande do Norte/ UFRN. Técnico em Logística pela Universidade   Federal do Rio Grande do Norte - Escola Agrícula de Júndiai/ EAJ/UFRN.", 250, 300, 480);
    image(imagemprogramador, 90, 250, 120, 120);
  
     voltar("Voltar") 
    
  }
  
  
  
  
  //JOGANDO 
  
  
  //TELA AVISANDO QUE ERROU 
  
  else if(tela == 7){
    
    voceerrou()
    voltar("Sair")
    
  }
  
  //TELA AVISANDO QUE GANHOU 
  
  else if(tela == 17){
    
    parabens("Parabéns!")
    voltar("Sair")
    
  }
  
  //FACIL
  
  //Pergunta 1f
  else if(tela==4){
   
    image(pergunta1f,0,0,800,500);
    
    pergunta("Simplifique:")
    opcaoSelecionada = 0 
    //botao 1
    retangulojogo(173,250,97,97,1);
    
    //botao 2
    retangulojogo(173,350,97,97,1);
    
     //botao 3
    retangulojogo(357,250,97,97,1);
    
     //botao 4
    retangulojogo(357,350,97,97,1);
    
    //botao 5
    retangulojogo(540,250,97,97,1);
    
    //botao 6
    retangulojogo(540,350,97,97,2);
    
    
    voltar("Sair")
    
    
  
  }
  
  //pergunta 2f
  else if(tela==8){
    image(pergunta2f,0,0,800,500)
   
    pergunta("Resolva o sistema de equações:")
     opcaoSelecionada = 0 
    //botao 1
    retangulojogo(210,285,160,40,1);
    
    //botao 2
    retangulojogo(210,366,160,40,1);
    
     //botao 3
    retangulojogo(445,285,160,40,2);
    
     //botao 4
    retangulojogo(445,366,160,40,1);
    
    voltar("Sair")
  }
  
  //pergunta 3f
  else if(tela==9){
    
      image(pergunta3f,0,0,800,500)
   
    pergunta("Calcule:")
     opcaoSelecionada = 0 
      //botao 1
    retangulojogo(70,300,80,80,1);
    
    //botao 2
    retangulojogo(212,300,80,80,2);
    
     //botao 3
    retangulojogo(358,300,80,80,1);
    
     //botao 4
    retangulojogo(506,300,80,80,1);
    
    //botao 5
    retangulojogo(652,300,80,80,1);
    
    voltar("Sair")
  }
 
  //pergunta 4f
  else if(tela==10){
    
     image(pergunta4f,0,0,800,500)
   
    pergunta("Resolva o sistema de equações:")
          opcaoSelecionada = 0 
      //botao 1
    retangulojogo(202,297,140,40,2);
    
    //botao 2
    retangulojogo(202,371,140,40,1);
    
     //botao 3
    retangulojogo(460,297,140,40,1);
    
     //botao 4
    retangulojogo(460,371,140,40,1);
    
    
    voltar("Sair")
    
  }
 
  //pergunta 5f
  else if(tela==11){
    
     image(pergunta5f,0,0,800,500)
   
    pergunta("Simplifique a expressão:")
    
        opcaoSelecionada = 0   
      //botao 1
    retangulojogo(110,298,215,40,2);
    
    //botao 2
    retangulojogo(110,363,215,40,1);
    
     //botao 3
    retangulojogo(480,298,215,40,1);
    
     //botao 4
    retangulojogo(480,363,215,40,1);
    
    voltar("Sair")
    
  }
  
  //pergunta 6f
   else if(tela==12){
    
      image(pergunta6f,0,0,800,500)
   
    pergunta("Encontre n:")
    
         opcaoSelecionada = 0  
      //botao 1
    retangulojogo(150,273,140,70,2);
    
    //botao 2
    retangulojogo(150,363,140,70,1);
    
     //botao 3
    retangulojogo(528,273,140,70,1);
    
     //botao 4
    retangulojogo(528,363,140,70,1);
    
    voltar("Sair")
    
     
  }
  
  //pergunta 7f
   else if(tela==13){
   
      image(pergunta7f,0,0,800,500)
   
      textFont("fantasy");
    textSize(40);
    noStroke();
    fill(255);
    text("Compare as frações e escolha"+"\n"+"o sinal apropriado :",50,80)
    
       opcaoSelecionada = 0    
      //botao 1
    retangulojogo(211,283,60,60,1);
    
    //botao 2
    retangulojogo(211,382,60,60,1);
    
     //botao 3
    retangulojogo(496,283,60,60,2);
    
     //botao 4
    retangulojogo(496,382,60,60,1);
    
    voltar("Sair")
    
     
  }
  
  //pergunta 8f
   else if(tela==14){
    
    image(pergunta8f,0,0,800,500)
   
    pergunta("Resolva o sistema de equações:")
     opcaoSelecionada = 0 
    //botao 1
    retangulojogo(170,320,220,40,1);
    
    //botao 2
    retangulojogo(170,390,220,40,1);
    
     //botao 3
    retangulojogo(425,320,220,40,1);
    
     //botao 4
    retangulojogo(425,390,220,40,2);
    
    voltar("Sair")
    
     
  }
  
  //pergunta 9f
   else if(tela==15){
    
     
       
    image(pergunta9f,0,0,800,500)
   
    pergunta("Resolva o sistema de equações:")
     opcaoSelecionada = 0 
    //botao 1
    retangulojogo(170,320,220,40,1);
    
    //botao 2
    retangulojogo(170,390,220,40,2);
    
     //botao 3
    retangulojogo(425,320,220,40,1);
    
     //botao 4
    retangulojogo(425,390,220,40,1);
    
    voltar("Sair")
    
     
     
     
  }
  
  //pergunta 10f
   else if(tela==16){
  
      
    image(pergunta10f,0,0,800,500);
    
    pergunta("Resolva a desigualdade:")
    opcaoSelecionada = 0 
    //botao 1
    retangulojogo(129,291,100,40,1);
    
    //botao 2
    retangulojogo(129,380,97,40,1);
    
     //botao 3
    retangulojogo(352,291,97,40,2);
    
     //botao 4
    retangulojogo(352,380,97,40,1);
    
    //botao 5
    retangulojogo(576,291,97,40,1);
    
    //botao 6
    retangulojogo(576,380,97,40,1);
    
    
    voltar("Sair")
     
     
  }
  
  
  
  
  
  
  //MEDIO
  
  //pergunta1m
   else if(tela==5){
  
     
      image(pergunta1m,0,0,800,500);
    
    pergunta("Calcule:")
    opcaoSelecionada = 0 
    //botao 1
    retangulojogo(129,291,100,40,1);
    
    //botao 2
    retangulojogo(129,380,97,40,1);
    
     //botao 3
    retangulojogo(352,291,97,40,2);
    
     //botao 4
    retangulojogo(352,380,97,40,1);
    
    //botao 5
    retangulojogo(576,291,97,40,1);
    
    //botao 6
    retangulojogo(576,380,97,40,1);
    
    
    voltar("Sair")
     
  }
  
  //pergunta2m
  else if(tela == 19){
    
    
     
      image(pergunta2m,0,0,800,500);
    
     textFont("fantasy");
    textSize(45);
    noStroke();
    fill(255);
     
    text("Faça a expanção da fração abaixo" + "\n" + "para que o denominador seja 16:",50, 80) 
    
    opcaoSelecionada = 0 
    
    //botao 1
    retangulojogo(280,260,85,85,1);
    
    //botao 2
    retangulojogo(280,375,85,85,1);
    
     //botao 3
    retangulojogo(435,260,85,85,2);
    
     //botao 4
    retangulojogo(435,375,85,85,1);
    
     voltar("Sair")
    
  }
  
   //pergunta3m
  else if(tela == 20){
    
       image(pergunta3m,0,0,800,500);
    
    pergunta("Resolva o sistema de equações:")
    opcaoSelecionada = 0 
    //botao 1
    retangulojogo(95,300,280,40,2);
    
    //botao 2
    retangulojogo(95,373,280,40,1);
    
     //botao 3
    retangulojogo(445,300,280,40,1);
    
     //botao 4
    retangulojogo(445,373,280,40,1);
    
    voltar("Sair")
    
    
  }
  
   //pergunta4m
  else if(tela == 21){
   
         image(pergunta4m,0,0,800,500);
    
     pergunta("Resolva a desigualdade:")
    opcaoSelecionada = 0 
    //botao 1
    retangulojogo(185,300,100,40,1);
    
    //botao 2
    retangulojogo(185,373,100,40,1);
    
     //botao 3
    retangulojogo(532,300,100,40,2);
    
     //botao 4
    retangulojogo(532,373,100,40,1);
    
    voltar("Sair")
    
    
    
  }
  
    //pergunta5m
  else if(tela == 22){
    
           image(pergunta5m,0,0,800,500);
    
    pergunta("Simplifique:")
    opcaoSelecionada = 0 
    //botao 1
    retangulojogo(210,258,115,113,1);
    
    //botao 2
    retangulojogo(210,379,115,113,1);
    
     //botao 3
    retangulojogo(508,258,115,113,2);
    
     //botao 4
    retangulojogo(508,379,115,113,1);
    
    voltar("Sair")
    
    
  }
  
    //pergunta6m
  else if(tela == 23){
  
           image(pergunta6m,0,0,800,500);
    
    pergunta("Simplifique:")
    opcaoSelecionada = 0 
    //botao 1
    retangulojogo(210,258,115,113,1);
    
    //botao 2
    retangulojogo(210,379,115,113,1);
    
     //botao 3
    retangulojogo(508,258,115,113,1);
    
     //botao 4
    retangulojogo(508,379,115,113,2);
    
    voltar("Sair")
    
  }
  
    //pergunta7m
  else if(tela == 24){
    
     
     image(pergunta7m,0,0,800,500)
   
    pergunta("Simplifique a expressão:")
    
        opcaoSelecionada = 0   
      //botao 1
    retangulojogo(85,290,170,40,2);
    
    //botao 2
    retangulojogo(85,382,170,40,1);
    
     //botao 3
    retangulojogo(311,290,170,40,1);
    
     //botao 4
    retangulojogo(311,382,170,40,1);
    
      //botao 5
    retangulojogo(540,291,170,40,1);
    
    //botao 6
    retangulojogo(540,382,170,40,1);
    
    voltar("Sair")
    
  }
  
    //pergunta8m
  else if(tela == 25){
    
       image(pergunta8m,0,0,800,500);
    
    pergunta("Simplifique:")
    opcaoSelecionada = 0 
    //botao 1
    retangulojogo(170,235,200,90,1);
    
    //botao 2
    retangulojogo(170,360,200,90,2);
    
     //botao 3
    retangulojogo(460,235,200,90,1);
    
     //botao 4
    retangulojogo(460,360,200,90,1);
    
    voltar("Sair")
    
    
  }
  
    //pergunta9m
  else if(tela == 26){
    
         image(pergunta9m,0,0,800,500);
    
    pergunta("Simplifique:")
    opcaoSelecionada = 0 
    //botao 1
    retangulojogo(170,235,200,90,2);
    
    //botao 2
    retangulojogo(170,360,200,90,1);
    
     //botao 3
    retangulojogo(460,235,200,90,1);
    
     //botao 4
    retangulojogo(460,360,200,90,1);
    
    voltar("Sair")
    
    
  }
  
    //pergunta10m
  else if(tela == 27){
    
     image(pergunta10m,0,0,800,500);
    
    pergunta("Qual é o valor de x?")
    opcaoSelecionada = 0 
    //botao 1
    retangulojogo(253,283,100,40,1);
    
    //botao 2
    retangulojogo(253,370,100,40,1);
    
     //botao 3
    retangulojogo(442,283,100,40,2);
    
     //botao 4
    retangulojogo(442,370,100,40,1);
    
    voltar("Sair")
    
  }
  
  
  
  //DIFICIL
   else if(tela==6){
    image( papeldeparede , 0, 0, 800, 500);

    
    textSize(50);
    fill(250);
    textFont("serif")
    text("Jogando nivel dificil", 266, 100);
     
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
else{
  
  
  
  //Troca de telas nível fácil
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
   else if(tela==4){
      if(opcaoSelecionada == 1 ){
        tela = 7
      } 
      if(opcaoSelecionada == 2){
        tela = 8
      }
    }
  else if(tela==8){
    if(opcaoSelecionada==1){
      tela = 7 
    }
    if(opcaoSelecionada==2){
      tela = 9
    }
  }
  else if(tela==9){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 10
    }
    }
  else if(tela==10){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 11
    }
    }
   else if(tela==11){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 12
    }
    }
  else if(tela==12){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 13
    }
    }
  else if(tela==13){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 14
    }
    }
    else if(tela==14){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 15
    }
    }
   else if(tela==15){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 16
    }
    }
   else if(tela==16){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 17
    }
    }
  
  
  
  
  
  
  //Troca de telas nível médio 
  
     else if(tela==5){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 19
    }
    }
   else if(tela==19){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 20
    }
    }
   else if(tela==20){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 21
    }
    }
  else if(tela==21){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 22
    }
    }
  else if(tela==22){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 23
    }
    }
   else if(tela==23){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 24
    }
    }
    else if(tela==24){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 25
    }
    }
    else if(tela==25){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 26
    }
    }
     else if(tela==26){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 27
    }
    }
      else if(tela==27){
    if(opcaoSelecionada==1){
      tela = 7
    }
    if(opcaoSelecionada==2){
      tela = 17
    }
    }
  
  
  
  
  

  }
}


