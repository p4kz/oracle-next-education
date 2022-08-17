# DESAFIO 5
## Lógica de programação II: pratique com desenhos, animações e um jogo
<br/>
Neste quinto módulo te desafiamos a fazer a seguinte atividade:  

 Dessa vez vamos ajudar nosso colega Herculano, ele criou um código para conseguir movimentar pela tela um círculo azul, só que no momento em que ele executa o programa, o círculo não se mexe e Herculano não sabe qual é o problema. O código desenvolvido por ele é o seguinte:

~~~
<canvas width="600" height="400"></canvas>

<script>

    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);

    function desenhaCirculo(x, y, raio) {

        pincel.fillStyle = 'blue';
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
    }

    function limpaTela() {

        pincel.clearRect(0, 0, 600, 400);
    }

   var x = 20; 

    function atualizaTela() {

        limpaTela();
        desenhaCirculo(x, 20, 10);
        x++;

    }

    setInterval(atualizaTela(), 10);

</script>
~~~

Você pode ajudar Herculano a encontrar o erro do código?