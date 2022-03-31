var datanum = 20;
var rank1;
var rank2;
var rank3;
var rank4;
var rank5;
var rank;

var score = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var tenscore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var twentyscore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var thirtyscore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var fourtyscore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var manscore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var womanscore = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

$(document).ready(function(){
	setTime();
	change_position();
	$(".moviePoster").click(function(){
		hideMovieInfo();

		var index = $(".moviePoster").index(this);

      $(".movieName").eq(index).css('background-color',"silver");
      $(".moviePoster").eq(index).css('background-color','silver');
		$(".movieInfo").eq(index).css('display','block');
	})
	$(window).resize(function(){ 
		change_position();
   });
	$("#mainPoster").each(function(){
		var container = $(this);
		var timer;
		function switchImg(){
			var imgs = container.find('img');	
			var first = imgs.eq(0);
			var second = imgs.eq(1);
			first.appendTo(container).fadeOut(2000);
			second.fadeIn();
		};
		function startTimer(){
			timer = setInterval(switchImg,3000);
		}
		function stopTimer(){
			clearInterval(timer);
		}
		container.hover(stopTimer,startTimer);
		startTimer();
	});
	rank = setInterval(ranking,10);
	$("#searchbutton").click(search);
   $(".menu_style").click(show_main);
})


function show_main(){
   $(".main_part").css('display','none');
   var index = $(".menu_style").index(this);
   $(".main_part").eq(index).css('display','block');
}
function setTime(){
	var now = new Date();
	var date;
	var time;
	date = now.getFullYear()+'. '+now.getMonth()+'. '+now.getDate()+'.'  ;
	$("#date").text(date);
	time = now.getHours() +' : '+now.getMinutes()+ ' : '+now.getSeconds();
	$("#clock").text(time);
	setTimeout('setTime()',1000);
}
function hideMovieInfo(){

   $(".moviePoster").css('background-color',"white");
   $(".movieName").css('background-color',"white");
	$(".movieInfo").css('display','none');
}
function change_position(){
	var margin = ($(window).width()-1000)/2+100;
	$("#home").css('marginLeft',margin);
	$("#movie").css('marginLeft',margin);
   $("#search").css('marginLeft',margin);
   $("#chair").css('marginLeft',margin-200);
	var side = $("#sideMenu");
	var left = ($(window).width()-1200)/2;
   var chair = $(window).height()-700;
   $("#chair").css('height',chair);
	side.css('left',left);
}

function ranking(){
   var req = $.ajax("db.json");
   req.done(function(data,status){
      if($("#sfchart").is(":checked")==true)//sf 차트
      {
         makeranking(data,"sf",score);
      }

      else if($("#dramachart").is(":checked")==true)//드라마 차트 
      {
         makeranking(data,"drama",score);
      }

      else if($("#hororchart").is(":checked")==true)//호러 차트
      {
         makeranking(data,"horor",score);
      }

      else if($("#animationchart").is(":checked")==true)//애니메이션 차트 
      {
         makeranking(data,"animation",score);
      }

      else if($("#tenchart").is(":checked")==true)//10대 차트 
      {
         makeranking2(data,tenscore);
      }

      else if($("#twentychart").is(":checked")==true)//20대 차트 
      {
         makeranking2(data,twentyscore);
      }

      else if($("#thirtychart").is(":checked")==true)//30대 차트 
      {
        makeranking2(data,thirtyscore);
      }

      else if($("#fortychart").is(":checked")==true)//40대 차트 
      {
        makeranking2(data,fourtyscore);
      }

      else if($("#manchart").is(":checked")==true)//남자 차트 
      {
         makeranking2(data,manscore);
      }

      else if($("#womanchart").is(":checked")==true)//30대 차트 
      {
         makeranking2(data,womanscore);
      }
   });
}

function makeranking(data,condition,type){
   var rank1value = -100;   //1등의 좋 싫 값 
   var rank2value = -100;   //2등의 좋 싫 값
   var rank3value = -100;   
   var rank4value = -100;
   var rank5value = -100;

   var result1;   //좋싫 값에 해당하는 이름을 저장 할 변수 
   var result2;
   var result3;
   var result4;
   var result5;

   for(var i =0; i<data.length;i++)
   {
      if(data[i].genre==condition)
      {
         if(rank1value <= parseInt(type[i]))
         {
            rank5 = rank4;
            rank4 = rank3;
            rank3 = rank2;
            rank2 = rank1;
            rank1 = data[i].number;

            rank5value = rank4value;
            rank4value = rank3value;
            rank3value = rank2value;
            rank2value = rank1value;
            rank1value = parseInt(type[i]);
            continue;
         }
         else if(rank2value <= parseInt(type[i]))
         {
            rank5 = rank4;
            rank4 = rank3;
            rank3 = rank2;
            rank2 = data[i].number;

            rank5value = rank4value;
            rank4value = rank3value;
            rank3value = rank2value;
            rank2value = parseInt(type[i]);
            continue;
         }
         else if(rank3value <= parseInt(type[i]))
         {
            rank5 = rank4;
            rank4 = rank3;
            rank3 = data[i].number;

            rank5value = rank4value;
            rank4value = rank3value;
            rank3value =  parseInt(type[i]);
            continue;
         }
         else if(rank4value <= parseInt(type[i]))
         {
            rank5 = rank4;
            rank4 = data[i].number;

            rank5value = rank4value;
            rank4value = parseInt(type[i]);
            continue;
         }
         else if(rank5value <= parseInt(type[i]))
         {
            rank5 = data[i].number;

            rank5value = parseInt(type[i]);
            continue;
         }
         else
            continue;
      }
   }

   for(var i = 0; i<data.length;i++)
   {
      if(data[i].number == rank1)
         result1 = data[i].name;
      else if(data[i].number == rank2)
         result2 = data[i].name;
      else if(data[i].number == rank3)
         result3 = data[i].name;
      else if(data[i].number == rank4)
         result4 = data[i].name;
      else if(data[i].number == rank5)
         result5 = data[i].name;
      else
         continue;
   }
   $(".grade1").text("1등 "+result1);   //답 표현
   $(".grade2").text("2등 "+result2);
   $(".grade3").text("3등 "+result3);
   $(".grade4").text("4등 "+result4);
   $(".grade5").text("5등 "+result5);
}

function makeranking2(data,type){
   var rank1value = -100;   //1등의 좋 싫 값 
   var rank2value = -100;   //2등의 좋 싫 값
   var rank3value = -100;   
   var rank4value = -100;
   var rank5value = -100;
   for(var i =0; i<data.length;i++)
   {
     if(rank1value <= parseInt(type[i]))
         {
            rank5 = rank4;
            rank4 = rank3;
            rank3 = rank2;
            rank2 = rank1;
            rank1 = data[i].number;

            rank5value = rank4value;
            rank4value = rank3value;
            rank3value = rank2value;
            rank2value = rank1value;
            rank1value = parseInt(type[i]);
            continue;
         }
         else if(rank2value <= parseInt(type[i]))
         {
            rank5 = rank4;
            rank4 = rank3;
            rank3 = rank2;
            rank2 = data[i].number;

            rank5value = rank4value;
            rank4value = rank3value;
            rank3value = rank2value;
            rank2value = parseInt(type[i]);
            continue;
         }
         else if(rank3value <= parseInt(type[i]))
         {
            rank5 = rank4;
            rank4 = rank3;
            rank3 = data[i].number;

            rank5value = rank4value;
            rank4value = rank3value;
            rank3value = parseInt(type[i]);
            continue;
         }
         else if(rank4value <= parseInt(type[i]))
         {
            rank5 = rank4;
            rank4 = data[i].number;

            rank5value = rank4value;
            rank4value = parseInt(type[i]);
            continue;
         }
         else if(rank5value <= parseInt(type[i]))
         {
            rank5 = data[i].number;

            rank5value = parseInt(type[i]);
            continue;
         }
         else
            continue;
   }
   for(var i = 0; i<data.length;i++)
   {
      if(data[i].number == rank1)
         result1 = data[i].name;
      else if(data[i].number == rank2)
         result2 = data[i].name;
      else if(data[i].number == rank3)
         result3 = data[i].name;
      else if(data[i].number == rank4)
         result4 = data[i].name;
      else if(data[i].number == rank5)
         result5 = data[i].name;
      else
         continue;
   }
   $(".grade1").text("1등 "+result1);   //답 표현
   $(".grade2").text("2등 "+result2);
   $(".grade3").text("3등 "+result3);
   $(".grade4").text("4등 "+result4);
   $(".grade5").text("5등 "+result5);
}

function search(){
   var form = document.searchform;
   var choice = form["choiceobj"].value;
   var detail = form["detailobj"].value;
   var req = $.ajax("db.json");
   req.done(function(data,status){
      $(".answer").text("");
      if(choice == "name")
      {
         var count = 0;
         for(var i =0; i<datanum;i++)
         {
            $(".answer").append(result);
            if((data[i].name).replace(/ /gi,"").indexOf(detail.replace(/ /gi,"")) != -1)
            {
              if(count ==0)
               {
                  var div = $("<div />");
                  var result = $("<img />");
                  result.attr("src",data[i].poster);
                  div.append(result);
                  var info = $("<button />").text("상세정보");
                  var evaluate = $("<button />").text("평가하기");
                  div.append(info);
                  div.append(evaluate);
                  $(".answer").append(div);
               }
               else
               {
                  var plus = $("<div />");
                  var plusimg = $("<img />");
                  plusimg.attr("src",data[i].poster);
                  plus.append(plusimg);
                  var info = $("<button />").text("상세정보");
                  var evaluate = $("<button />").text("평가하기");
                  plus.append(info);
                  plus.append(evaluate);
                  $(".answer").append(plus);
               }
            }
         }
      }
      else if(choice == "genre")
      {
         var count = 0;
         for(var i =0; i<datanum;i++)
         {
            if((data[i].genre).replace(/ /gi,"").indexOf(detail.replace(/ /gi,"")) != -1)
            {
               if(count ==0)
               {
                  var div = $("<div />");
                  var result = $("<img />");
                  result.attr("src",data[i].poster);
                  div.append(result);
                  var info = $("<button />").text("상세정보");
                  var evaluate = $("<button />").text("평가하기");
                  div.append(info);
                  div.append(evaluate);
                  $(".answer").append(div);
               }
               else
               {
                  var plus = $("<div />");
                  var plusimg = $("<img />");
                  plusimg.attr("src",data[i].poster);
                  plus.append(plusimg);
                  var info = $("<button />").text("상세정보");
                  var evaluate = $("<button />").text("평가하기");
                  plus.append(info);
                  plus.append(evaluate);
                  $(".answer").append(plus);
               }
            }
         }
      }
      else
      {
         var count = 0;
         for(var i =0; i<datanum;i++)
         {
            if((data[i].director).replace(/ /gi,"").indexOf(detail.replace(/ /gi,"")) != -1)
            {
               if(count ==0)
               {
                  var div = $("<div />");
                  var result = $("<img />");
                  result.attr("src",data[i].poster);
                  div.append(result);
                  var info = $("<button />").text("상세정보");
                  var evaluate = $("<button />").text("평가하기");
                  div.append(info);
                  div.append(evaluate);
                  $(".answer").append(div);
               }
               else
               {
                  var plus = $("<div />");
                  var plusimg = $("<img />");
                  plusimg.attr("src",data[i].poster);
                  plus.append(plusimg);
                  var info = $("<button />").text("상세정보");
                  var evaluate = $("<button />").text("평가하기");
                  plus.append(info);
                  plus.append(evaluate);
                  $(".answer").append(plus);
               }
            }
         }
      }
   });
}