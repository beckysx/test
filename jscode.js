var change = function() {

  var a = document.getElementsByTagName('li')
  let b = Array.from(a)
  b.forEach(function(d,index) {
    b[index]=b[index].outerText;
    alert(b[index])

    a[index].innerHTML=b[index].length


  })

}
