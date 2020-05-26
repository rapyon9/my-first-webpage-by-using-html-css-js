var Body = {
  setTextColor : function(color){
    document.querySelector('body').style.color=color;
  },
  setBackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}

var Links = {
  setLinkColor : function(color){
    var a_list = document.querySelectorAll('a');
    var i=0;
    while(i<a_list.length){
      a_list[i].style.color = color;
      i=i+1;}
  }
}

function nightDayHandler(self){
if(self.value === 'night'){
  Body.setBackgroundColor('black');
  Body.setTextColor('white');
  self.value = 'day';
  Links.setLinkColor('powderblue');}
else{
  Body.setBackgroundColor('white');
  Body.setTextColor('black');
  self.value = 'night';
  Links.setLinkColor('blue');}
}
