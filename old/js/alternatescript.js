document.addEventListener("DOMContentLoaded", function(event) {

  //function that returns class on passing a class
    var classReturn = function (passedClass){
    var returnClass = document.querySelector(passedClass).className;
    return returnClass;
  }
  //function that updates classes on passing a class
    var classUpdate = function (passedClass,newClasses){
      var passClass = "." + passedClass;
      var getClass = document.querySelector(passClass).className;
      var updateClass = passedClass + " " + newClasses;
      document.querySelector(passClass).className = updateClass;
  }

	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    var menuClasses = classReturn(".desktop-nav");
    var navClasses = classReturn(".mobile-nav");
    if(this.className){
      //menu is open right now
      var passedClass1 = "desktop-nav";
      var newClasses1 = "desktop-nav-open";
      var passedClass2 = "mobile-nav";
      var newClasses2 = "mobile-nav-open";
      classUpdate(passedClass1,newClasses1);
      // classUpdate(passedClass2,newClasses2);
    }
    else{
      //menu is closed right now
      var passedClass1 = "desktop-nav";
      var newClasses1 = "";
      var passedClass2 = "mobile-nav";
      var newClasses2 = "";
      classUpdate(passedClass1,newClasses1);
      // classUpdate(passedClass2,newClasses2);
    }
  });

});
