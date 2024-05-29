
var btn=document.getElementById('btn')
var quote=document.getElementById('quote')

var arr=[
    '“Be yourself; everyone else is already taken.” <br>― Oscar Wilde ',
    '“So many books, so little time.”<br>― Frank Zappa',
    '“A room without books is like a body without a soul.” <br>― Marcus Tullius Cicero ',
    '“You only live once, but if you do it right, once is enough.” <br>― Mae West    ',
    '“Be the change that you wish to see in the world.”   <br>― Mahatma Gandhi    ',
    '“If you tell the truth, you do not have to remember anything.”<br>― Mark Twain    ',
    '“A friend is someone who knows all about you and still loves you.” <br>― Elbert Hubbard',
    '“Always forgive your enemies; nothing annoys them so much.”  <br>― Oscar Wilde    ',
    '“We accept the love we think we deserve.”    <br>― Stephen Chbosky    ',
    '“Without music, life would be a mistake.”<br>― Friedrich Nietzsche   ',

]


btn.onclick=function(){
    var randomQuote=arr[Math.floor(Math.random() * arr.length)]
    quote.innerHTML=randomQuote;
}



 










