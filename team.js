var datanum = 20;
var rank1;
var rank2;
var rank3;
var rank4;
var rank5;
var rank;

var index;
var count = new Array(); //좋아요/싫어요 버튼을 눌렀다면 1
for(var i=0; i<20; i++)
   count[i] = 0;

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
   index = 0;
   init();

   $(".trailer").click(function(){
      $(".trailer").css('background-color','black');
      $(".trailer").css('color','white');
      $(".article").css('background-color','white');
      $(".article").css('color','black');
   });
   $(".article").click(function(){
      $(".article").css('background-color','black');
      $(".article").css('color','white');
      $(".trailer").css('background-color','white');
      $(".trailer").css('color','black');
   });

	$(".moviePoster").click(function(){
		hideMovieInfo();

		index = $(".moviePoster").index(this);
      $(".movieName").eq(index).css('background-color',"silver");
      $(".moviePoster").eq(index).css('background-color','silver');
      $(".movieInfo").eq(index).css('background-color','silver');
      $(".movieInfo").css('display','block');
      $(".movieInfoButton").eq(index).css('display','inline-block');
      $(".movieEvalButton").eq(index).css('display','inline-block');
      $(".movieInfoButton").click(function(){
         $(".Info").eq(index).css('display','block');

         var req = $.ajax("db.json");
         req.done(function(data, status){
            $(".infoTop_title").eq(index).html(data[index].name);

            var table = $("<table/>");
            var row1 = $("<tr/>")
               .append($("<td/>").text("장르"))
               .append($("<td/>").text(data[index].genre));
            table.append(row1);
            var row2 = $("<tr/>")
               .append($("<td/>").text("감독"))
               .append($("<td/>").text(data[index].director));
            table.append(row2);
            var row3 = $("<tr/>")
               .append($("<td/>").text("개봉일"))
               .append($("<td/>").text(data[index].date));
            table.append(row3);
            $(".infoTop_main").eq(index).html(table);
         });
         $(".trailer").eq(index).click(function() {
            $(".infoMiddle_article iframe").css('display', 'none');
            $(".infoMiddle_trailer iframe").css('display', 'block');
         });
          $(".article").eq(index).click(function() {
            $(".infoMiddle_trailer iframe").css('display', 'none');
            $(".infoMiddle_article iframe").css('display', 'block');
         });

         

      });
      $(".infox").click(function(){
            $(".Info").css('display','none');
         $(".trailer").css('background-color','white');
         $(".trailer").css('color','black');
         $(".article").css('background-color','white');
         $(".article").css('color','black');

         });

      $(".movieEvalButton").click(function(){
         $(".Evaluate").eq(index).css('display','block');

         if(count[index] == 0) {
            var gender = "";
            var age = "";
            $(".good").click(function(){
               gender = $("input[name='gender']:checked").val();
               if(gender == 'man') {
                  score[index]++;
                  manscore[index]++;
                  count[index]++;
               }
               else if(gender == 'woman') {
                  score[index]++;
                  womanscore[index]++;
                  count[index]++;
               }
               else 
                  alert("성별을 체크하세요");
                  
               age = $("input[name='age']:checked").val();
               if(age == '10') {
                  tenscore[index]++;
                  count[index]++;
               }
               else if(age == '20') {
                  twentyscore[index]++;
                  count[index]++;
               }
               else if(age == '30') {
                  thirtyscore[index]++;
                  count[index]++;
               }
               else if(age == '40') {
                  fourtyscore[index]++;
                  count[index]++;
               }
               else 
                  alert("나이를 체크하세요");
            });

            $(".bad").click(function(){
               gender = $("input[name='gender']:checked").val();
               if(gender == 'man') {
                  score[index]--;
                  manscore[index]--;
                  count[index]++;
               }
               else if(gender == 'woman') {
                  score[index]--;
                  womanscore[index]--;
                  count[index]++;
               }
               else 
                  alert("성별을 체크하세요");

               age = $("input[name='age']:checked").val();
               if(age == '10') {
                  tenscore[index]--;
                  count[index]++;
               }
               else if(age == '20') {
                  twentyscore[index]--;
                  count[index]++;
               }
               else if(age == '30') {
                  thirtyscore[index]--;
                  count[index]++;
               }
               else if(age == '40') {
                  fourtyscore[index]--;
                  count[index]++;
               }
               else 
                  alert("나이를 체크하세요");
            });
         }
         else
            $(".Evaluate").eq(index).css('display','none');


      });
      $(".evalx").click(function(){
            $(".Evaluate").css('display','none');
         });
	});

   $(".comment_button").click(function()
      {
         com_button_click(index);
      });

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


function com_button_click(index)
{
   var name = $(".read_name").eq(index).val();
   var comment = $(".read_comment").eq(index).val();
   $(".all_comment").eq(index).append("<div class='get'><strong>" + name + "</strong><button class = 'delete'>삭제</button><br>" + comment +"<br><br></div>");
   $(".delete").click(function()
   {
      div = $(this).parent("div");
      div.remove();
   })
}
function init()
{
   var req = $.ajax("db.json");
   req.done(function(data,status){
   for(var i=0; i<20; i++)
   {
      $(".poster").eq(i).attr("src", data[i].poster);
      $(".poster_in").eq(i).attr("src", data[i].poster);
      $(".infoMiddle_trailer").eq(i).html(data[i].trailer);
      $(".infoMiddle_article").eq(i).html(data[i].news);
      $(".movieName").eq(i).text(data[i].name);
      $(".all_comment").eq(i).load(data[i].review);
   }

});
}
function show_main(){
   $(".main_part").css('display','none');
   $(".menu_style").css('text-decoration','none');

   var index = $(".menu_style").index(this);
   $(".main_part").eq(index).css('display','block');
   $(".menu_style").eq(index).css('text-decoration','line-through');

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
   $(".movieInfo").css('background-color',"white");
   $(".movieInfoButton").css('display','none');
   $(".movieEvalButton").css('display','none');
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
   $("#leftneon").css('left',left-15);
   $("#rightneon").css('left',left+1200);
   var infoleft = ($(window).width()-750)/2;
   $(".info").css('left',infoleft);
   $(".Evaluate").css('left',($(window).width()-250)/2)
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
            
            if((data[i].name).replace(/ /gi,"").indexOf(detail.replace(/ /gi,"")) != -1)
            {
              if(count ==0)
               {
                  var div = $("<div />").css({"width" : 900, "height" : 600}).css("margin-top", 60);
                  var result = $("<img />");
                  result.attr("src",data[i].poster);
                  result.css('float', 'left');
                  div.append(result);
                  var content_div = $("<div/>");
                  content_div.append("제목 : " + data[i].name+"<br>");
                  content_div.append("장르 : " + data[i].genre+"<br>");
                  content_div.append("감독 : " + data[i].director+"<br>");
                  content_div.append("날짜 : " + data[i].date+"<br>");
                  content_div.css('float', 'left');
                  div.append(content_div);
                  $(".answer").append(div);
               }
               else
               {
                  var div = $("<div />").css({"width" : 900, "height" : 600}).css("margin-top", 60);
                  var result = $("<img />");
                  result.attr("src",data[i].poster);
                  result.css('float', 'left');
                  div.append(result);
                  var content_div = $("<div/>");
                  content_div.append("제목 : " + data[i].name+"<br>");
                  content_div.append("장르 : " + data[i].genre+"<br>");
                  content_div.append("감독 : " + data[i].director+"<br>");
                  content_div.append("날짜 : " + data[i].date+"<br>");
                  content_div.css('float', 'left');
                  div.append(content_div);
                  $(".answer").append(div);
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
                 var div = $("<div />").css({"width" : 700, "height" : 500}).css("margin-top", 60);
                  var result = $("<img />");
                  result.attr("src",data[i].poster);
                  result.css('float', 'left');
                  div.append(result);
                  var content_div = $("<div/>");
                  content_div.append("제목 : " + data[i].name+"<br>");
                  content_div.append("장르 : " + data[i].genre+"<br>");
                  content_div.append("감독 : " + data[i].director+"<br>");
                  content_div.append("날짜 : " + data[i].date+"<br>");
                  content_div.css('float', 'left');
                  div.append(content_div);
                  $(".answer").append(div);
               }
               else
               {
                  var div = $("<div />").css({"width" : 700, "height" : 500}).css("margin-top", 60);
                  var result = $("<img />");
                  result.attr("src",data[i].poster);
                  result.css('float', 'left');
                  div.append(result);
                  var content_div = $("<div/>");
                  content_div.append("제목 : " + data[i].name+"<br>");
                  content_div.append("장르 : " + data[i].genre+"<br>");
                  content_div.append("감독 : " + data[i].director+"<br>");
                  content_div.append("날짜 : " + data[i].date+"<br>");
                  content_div.css('float', 'left');
                  div.append(content_div);
                  $(".answer").append(div);
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
                  var div = $("<div />").css({"width" :700, "height" : 500}).css("margin-top", 60);
                  var result = $("<img />");
                  result.attr("src",data[i].poster);
                  result.css('float', 'left');
                  div.append(result);
                  var content_div = $("<div/>");
                  content_div.append("제목 : " + data[i].name+"<br>");
                  content_div.append("장르 : " + data[i].genre+"<br>");
                  content_div.append("감독 : " + data[i].director+"<br>");
                  content_div.append("날짜 : " + data[i].date+"<br>");
                  content_div.css('float', 'left');
                  div.append(content_div);
                  $(".answer").append(div);
               }
               else
               {
                  var div = $("<div />").css({"width" : 700, "height" : 500}).css("margin-top", 60);
                  var result = $("<img />");
                  result.attr("src",data[i].poster);
                  result.css('float', 'left');
                  div.append(result);
                  var content_div = $("<div/>");
                  content_div.append("제목 : " + data[i].name+"<br>");
                  content_div.append("장르 : " + data[i].genre+"<br>");
                  content_div.append("감독 : " + data[i].director+"<br>");
                  content_div.append("날짜 : " + data[i].date+"<br>");
                  content_div.css('float', 'left');
                  div.append(content_div);
                  $(".answer").append(div); 
               }
            }
         }
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
   if(result5 == undefined){
    $(".grade5").text("5등 ");
   }else{
   $(".grade5").text("5등 "+result5);
   }    
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
   if(result5 == undefined){
   $(".grade5").text("5등 ");
   }else{
   $(".grade5").text("5등 "+result5);
   }
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
