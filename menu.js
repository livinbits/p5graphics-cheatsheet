document.write(`

<header id="page-header">
  <ul id="language-selection">
    <li><a href="index.html">English</a></li>
    <li><a href="it.html">Italiano</a></li>
    <li><a href="zh.html">中文</a></li>
    <li class="sep">|</li>
    <li><a href="https://p5js.org/reference/">p5js Reference</a></li>
    <li class="sep">|</li>
    <li id="print">Print</li>
  </ul>
</header>

<style>
  #print:hover{cursor:pointer;}
</style>

`)


document.getElementById('print').addEventListener('click', function(){
  // print();

  let browser = navigator.userAgent.split(')').reverse()[0].match(/(?!Gecko|Version|[A-Za-z]+?Web[Kk]it)[A-Z][a-z]+/g)[0]

  console.log(browser)
  if(browser != "Chrome"){
    alert('The p5.js cheatsheet prints with best results from Chrome! \n You might consider printing from the PDF available on github for better results! \n https://github.com/livinbits/p5js-cheatsheet-forartists')
  }
  print();
})
