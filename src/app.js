//document.write("It works.");#The first way of doing it
/*
2nd way of doing by adding things in a different file 
*/ 
//require("!style!css!./style.css");//Adding style
require("./style.css");//Adding style by moving the binding of !style!css! to config file. We bind extension with a loader
document.write(require("./webpacktest.js"));//2nd way of doing by adding things in a different file