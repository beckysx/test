var dataPc=d3.csv("color.csv");
var drawChartc = function(data){
  var svg=d3.select(".csv")
            .attr("width",width)
            .attr("height",height);
  svg.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x",function(d,i){
       return i*(barwidth+barpadding)
     })
     .attr("y",function(d){
       return height- d.num*20
     })
     .attr("width",barwidth)
     .attr("height",function(d){
       return d.num*20
     })
     .attr("fill",function(d){
       return d.color
     })
}
dataPc.then(function(data){
  console.log(data),
  drawChartc(data)
})
