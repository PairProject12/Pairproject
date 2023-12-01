var audioA=new Audio();
audioA.src ="audio/Basic_English_How_to_Pronounce_the_Letter_A.mp3"
var audioB=new Audio();
audioB.src ="audio/Basic_English_How_to_Pronounce_the_Letter_B.mp3"
var audioC=new Audio();
audioC.src ="audio/Basic_English_How_to_Pronounce_the_Letter_C.mp3"
var audioD=new Audio();
audioD.src ="audio/Basic_English_How_to_Pronounce_the_Letter_D.mp3"
var audioE=new Audio();
audioE.src ="audio/Basic_English_How_to_Pronounce_the_Letter_E.mp3"
var audioF=new Audio();
audioF.src ="audio/Basic_English_How_to_Pronounce_the_Letter_F.mp3"
var audioG=new Audio();
audioG.src ="audio/Basic_English_How_to_Pronounce_the_Letter_G.mp3"
$('.letterA').click(function(){
    audioA.play();
  });
$('.letterB').click(function(){
    audioB.play();
  });
$('.letterC').click(function(){
    audioC.play();
  });
$('.letterD').click(function(){
    audioD.play();
  });
$('.letterE').click(function(){
    audioE.play();
  });
$('.letterF').click(function(){
    audioF.play();
  });
$('.letterG').click(function(){
    audioG.play();
  });