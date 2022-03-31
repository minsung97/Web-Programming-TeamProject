var datanum = 20;

var rank1;
var rank2;
var rank3;
var rank4;
var rank5;

$(document).ready(function(){
	$("#searchbutton").click(search);
	var rank;
	rank = setInterval(ranking,10);
});

function search(){
	var form = document.searchform;
	var choice = form["choiceobj"].value;
	var detail = form["detailobj"].value;
	var req = $.ajax("db.json");
	req.done(function(data,status){
		if(choice == "name")
		{
			var result = $("<div />");
			for(var i =0; i<datanum;i++)
			{
				if((data[i].name).replace(/ /gi,"").indexOf(detail.replace(/ /gi,"")) != -1)
				{
					result.append(data[i].name+"<br>");
					result.append(data[i].genre+"<br>");
					result.append(data[i].director+"<br>");
					result.append(data[i].date+"<br>"+"<br>");
					$(".answer").append(result);
				}
			}
		}
		else if(choice == "genre")
		{
			var result = $("<div />");
			for(var i =0; i<datanum;i++)
			{
				if((data[i].genre).replace(/ /gi,"").indexOf(detail.replace(/ /gi,"")) != -1)
				{
					result.append(data[i].name+"<br>");
					result.append(data[i].genre+"<br>");
					result.append(data[i].director+"<br>");
					result.append(data[i].date+"<br>"+"<br>");
					$(".answer").append(result);
				}
			}
		}
		else
		{
			var result = $("<div />");
			for(var i =0; i<datanum;i++)
			{
				if((data[i].director).replace(/ /gi,"").indexOf(detail.replace(/ /gi,"")) != -1)
				{
					result.append(data[i].name+"<br>");
					result.append(data[i].genre+"<br>");
					result.append(data[i].director+"<br>");
					result.append(data[i].date+"<br>"+"<br>");
					$(".answer").append(result);
				}
			}
		}
	});
}

function ranking(){
	var req = $.ajax("db.json");
	req.done(function(data,status){
		if($("#sfchart").is(":checked")==true)//sf 차트
		{
			var rank1value = -100;	//1등의 좋 싫 값 
			var rank2value = -100;	//2등의 좋 싫 값
			var rank3value = -100;	
			var rank4value = -100;
			var rank5value = -100;
			for(var i =0; i<data.length;i++)
			{
				if(data[i].genre=="sf")
				{
					if(rank1value <= parseInt(data[i].good)+parseInt(data[i].bad))
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
						rank1value = parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank2value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = rank4;
						rank4 = rank3;
						rank3 = rank2;
						rank2 = data[i].number;

						rank5value = rank4value;
						rank4value = rank3value;
						rank3value = rank2value;
						rank2value = parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank3value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = rank4;
						rank4 = rank3;
						rank3 = data[i].number;

						rank5value = rank4value;
						rank4value = rank3value;
						rank3value =  parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank4value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = rank4;
						rank4 = data[i].number;

						rank5value = rank4value;
						rank4value =  parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank5value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = data[i].number;

						rank5value = parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else
						continue;
				}
			}
			var result1;	//좋싫 값에 해당하는 이름을 저장 할 변수 
			var result2;
			var result3;
			var result4;
			var result5;
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
			$(".grade1").text("1등 "+result1);	//답 표현
			$(".grade2").text("2등 "+result2);
			$(".grade3").text("3등 "+result3);
			$(".grade4").text("4등 "+result4);
			$(".grade5").text("5등 "+result5);
		}

		else if($("#dramachart").is(":checked")==true)//드라마 차트 
		{
			var rank1value = -100;	//1등의 좋 싫 값 
			var rank2value = -100;	//2등의 좋 싫 값
			var rank3value = -100;	
			var rank4value = -100;
			var rank5value = -100;
			for(var i =0; i<data.length;i++)
			{
				if(data[i].genre=="drama")
				{
					if(rank1value <= parseInt(data[i].good)+parseInt(data[i].bad))
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
						rank1value = parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank2value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = rank4;
						rank4 = rank3;
						rank3 = rank2;
						rank2 = data[i].number;

						rank5value = rank4value;
						rank4value = rank3value;
						rank3value = rank2value;
						rank2value = parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank3value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = rank4;
						rank4 = rank3;
						rank3 = data[i].number;

						rank5value = rank4value;
						rank4value = rank3value;
						rank3value =  parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank4value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = rank4;
						rank4 = data[i].number;

						rank5value = rank4value;
						rank4value =  parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank5value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = data[i].number;

						rank5value = parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else
						continue;
				}
			}
			var result1;	//좋싫 값에 해당하는 이름을 저장 할 변수 
			var result2;
			var result3;
			var result4;
			var result5;
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
			$(".grade1").text("1등 "+result1);	//답 표현
			$(".grade2").text("2등 "+result2);
			$(".grade3").text("3등 "+result3);
			$(".grade4").text("4등 "+result4);
			$(".grade5").text("5등 "+result5);
		}

		else if($("#hororchart").is(":checked")==true)//호러 차트
		{
			var rank1value = -100;
			var rank2value = -100;
			var rank3value = -100;
			var rank4value = -100;
			var rank5value = -100;
			for(var i =0; i<data.length;i++)
			{
				if(data[i].genre=="horor")
				{
					if(rank1value <= parseInt(data[i].good)+parseInt(data[i].bad))
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
						rank1value = parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank2value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = rank4;
						rank4 = rank3;
						rank3 = rank2;
						rank2 = data[i].number;

						rank5value = rank4value;
						rank4value = rank3value;
						rank3value = rank2value;
						rank2value = parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank3value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = rank4;
						rank4 = rank3;
						rank3 = data[i].number;

						rank5value = rank4value;
						rank4value = rank3value;
						rank3value =  parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank4value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = rank4;
						rank4 = data[i].number;

						rank5value = rank4value;
						rank4value =  parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank5value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = data[i].number;

						rank5value = parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else
						continue;
				}
			}
			var result1;
			var result2;
			var result3;
			var result4;
			var result5;
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
			$(".grade1").text("1등 "+result1);
			$(".grade2").text("2등 "+result2);
			$(".grade3").text("3등 "+result3);
			$(".grade4").text("4등 "+result4);
			$(".grade5").text("5등 "+result5);
		}

		else if($("#animationchart").is(":checked")==true)//애니메이션 차트 
		{
			var rank1value = -100;	//1등의 좋 싫 값 
			var rank2value = -100;	//2등의 좋 싫 값
			var rank3value = -100;	
			var rank4value = -100;
			var rank5value = -100;
			for(var i =0; i<data.length;i++)
			{
				if(data[i].genre=="animation")
				{
					if(rank1value <= parseInt(data[i].good)+parseInt(data[i].bad))
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
						rank1value = parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank2value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = rank4;
						rank4 = rank3;
						rank3 = rank2;
						rank2 = data[i].number;

						rank5value = rank4value;
						rank4value = rank3value;
						rank3value = rank2value;
						rank2value = parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank3value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = rank4;
						rank4 = rank3;
						rank3 = data[i].number;

						rank5value = rank4value;
						rank4value = rank3value;
						rank3value =  parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank4value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = rank4;
						rank4 = data[i].number;

						rank5value = rank4value;
						rank4value =  parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else if(rank5value <= parseInt(data[i].good)+parseInt(data[i].bad))
					{
						rank5 = data[i].number;

						rank5value = parseInt(data[i].good)+parseInt(data[i].bad);
						continue;
					}
					else
						continue;
				}
			}
			var result1;	//좋싫 값에 해당하는 이름을 저장 할 변수 
			var result2;
			var result3;
			var result4;
			var result5;
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
			$(".grade1").text("1등 "+result1);	//답 표현
			$(".grade2").text("2등 "+result2);
			$(".grade3").text("3등 "+result3);
			$(".grade4").text("4등 "+result4);
			$(".grade5").text("5등 "+result5);
		}

		else if($("#tenchart").is(":checked")==true)//10대 차트 
		{
			var rank1value = -100;	//1등의 좋 싫 값 
			var rank2value = -100;	//2등의 좋 싫 값
			var rank3value = -100;	
			var rank4value = -100;
			var rank5value = -100;
			for(var i =0; i<data.length;i++)
			{
				if(rank1value <= parseInt(data[i].tengood)+parseInt(data[i].tenbad))
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
					rank1value = parseInt(data[i].tengood)+parseInt(data[i].tenbad);
					continue;
				}
				else if(rank2value <= parseInt(data[i].tengood)+parseInt(data[i].tenbad))
				{
					rank5 = rank4;
					rank4 = rank3;
					rank3 = rank2;
					rank2 = data[i].number;

					rank5value = rank4value;
					rank4value = rank3value;
					rank3value = rank2value;
					rank2value = parseInt(data[i].tengood)+parseInt(data[i].tenbad);
					continue;
				}
				else if(rank3value <= parseInt(data[i].tengood)+parseInt(data[i].tenbad))
				{
					rank5 = rank4;
					rank4 = rank3;
					rank3 = data[i].number;

					rank5value = rank4value;
					rank4value = rank3value;
					rank3value =  parseInt(data[i].tengood)+parseInt(data[i].tenbad);
					continue;
				}
				else if(rank4value <= parseInt(data[i].tengood)+parseInt(data[i].tenbad))
				{
					rank5 = rank4;
					rank4 = data[i].number;

					rank5value = rank4value;
					rank4value =  parseInt(data[i].tengood)+parseInt(data[i].tenbad);
					continue;
				}
				else if(rank5value <= parseInt(data[i].tengood)+parseInt(data[i].tenbad))
				{
					rank5 = data[i].number;

					rank5value = parseInt(data[i].tengood)+parseInt(data[i].tenbad);
					continue;
				}
				else
					continue;
			}
			var result1;	//좋싫 값에 해당하는 이름을 저장 할 변수 
			var result2;
			var result3;
			var result4;
			var result5;
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
			$(".grade1").text("1등 "+result1);	//답 표현
			$(".grade2").text("2등 "+result2);
			$(".grade3").text("3등 "+result3);
			$(".grade4").text("4등 "+result4);
			$(".grade5").text("5등 "+result5);
		}

		else if($("#twentychart").is(":checked")==true)//20대 차트 
		{
			var rank1value = -100;	//1등의 좋 싫 값 
			var rank2value = -100;	//2등의 좋 싫 값
			var rank3value = -100;	
			var rank4value = -100;
			var rank5value = -100;
			for(var i =0; i<data.length;i++)
			{
				if(rank1value <= parseInt(data[i].twentygood)+parseInt(data[i].twentybad))
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
					rank1value = parseInt(data[i].twentygood)+parseInt(data[i].twentybad);
					continue;
				}
				else if(rank2value <= parseInt(data[i].twentygood)+parseInt(data[i].twentybad))
				{
					rank5 = rank4;
					rank4 = rank3;
					rank3 = rank2;
					rank2 = data[i].number;

					rank5value = rank4value;
					rank4value = rank3value;
					rank3value = rank2value;
					rank2value = parseInt(data[i].twentygood)+parseInt(data[i].twentybad);
					continue;
				}
				else if(rank3value <= parseInt(data[i].twentygood)+parseInt(data[i].twentybad))
				{
					rank5 = rank4;
					rank4 = rank3;
					rank3 = data[i].number;

					rank5value = rank4value;
					rank4value = rank3value;
					rank3value =  parseInt(data[i].twentygood)+parseInt(data[i].twentybad);
					continue;
				}
				else if(rank4value <= parseInt(data[i].twentygood)+parseInt(data[i].twentybad))
				{
					rank5 = rank4;
					rank4 = data[i].number;

					rank5value = rank4value;
					rank4value =  parseInt(data[i].twentygood)+parseInt(data[i].twentybad);
					continue;
				}
				else if(rank5value <= parseInt(data[i].twentygood)+parseInt(data[i].twentybad))
				{
					rank5 = data[i].number;

					rank5value = parseInt(data[i].twentygood)+parseInt(data[i].twentybad);
					continue;
				}
				else
					continue;
			}
			var result1;	//좋싫 값에 해당하는 이름을 저장 할 변수 
			var result2;
			var result3;
			var result4;
			var result5;
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
			$(".grade1").text("1등 "+result1);	//답 표현
			$(".grade2").text("2등 "+result2);
			$(".grade3").text("3등 "+result3);
			$(".grade4").text("4등 "+result4);
			$(".grade5").text("5등 "+result5);
		}

		else if($("#thirtychart").is(":checked")==true)//30대 차트 
		{
			var rank1value = -100;	//1등의 좋 싫 값 
			var rank2value = -100;	//2등의 좋 싫 값
			var rank3value = -100;	
			var rank4value = -100;
			var rank5value = -100;
			for(var i =0; i<data.length;i++)
			{
				if(rank1value <= parseInt(data[i].thirtygood)+parseInt(data[i].thirtybad))
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
					rank1value = parseInt(data[i].thirtygood)+parseInt(data[i].thirtybad);
					continue;
				}
				else if(rank2value <= parseInt(data[i].thirtygood)+parseInt(data[i].thirtybad))
				{
					rank5 = rank4;
					rank4 = rank3;
					rank3 = rank2;
					rank2 = data[i].number;

					rank5value = rank4value;
					rank4value = rank3value;
					rank3value = rank2value;
					rank2value = parseInt(data[i].thirtygood)+parseInt(data[i].thirtybad);
					continue;
				}
				else if(rank3value <= parseInt(data[i].thirtygood)+parseInt(data[i].thirtybad))
				{
					rank5 = rank4;
					rank4 = rank3;
					rank3 = data[i].number;

					rank5value = rank4value;
					rank4value = rank3value;
					rank3value =  parseInt(data[i].thirtygood)+parseInt(data[i].thirtybad);
					continue;
				}
				else if(rank4value <= parseInt(data[i].thirtygood)+parseInt(data[i].thirtybad))
				{
					rank5 = rank4;
					rank4 = data[i].number;

					rank5value = rank4value;
					rank4value =  parseInt(data[i].thirtygood)+parseInt(data[i].thirtybad);
					continue;
				}
				else if(rank5value <= parseInt(data[i].thirtygood)+parseInt(data[i].thirtybad))
				{
					rank5 = data[i].number;

					rank5value = parseInt(data[i].thirtygood)+parseInt(data[i].thirtybad);
					continue;
				}
				else
					continue;
			}
			var result1;	//좋싫 값에 해당하는 이름을 저장 할 변수 
			var result2;
			var result3;
			var result4;
			var result5;
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
			$(".grade1").text("1등 "+result1);	//답 표현
			$(".grade2").text("2등 "+result2);
			$(".grade3").text("3등 "+result3);
			$(".grade4").text("4등 "+result4);
			$(".grade5").text("5등 "+result5);
		}

		else if($("#fortychart").is(":checked")==true)//30대 차트 
		{
			var rank1value = -100;	//1등의 좋 싫 값 
			var rank2value = -100;	//2등의 좋 싫 값
			var rank3value = -100;	
			var rank4value = -100;
			var rank5value = -100;
			for(var i =0; i<data.length;i++)
			{
				if(rank1value <= parseInt(data[i].fortygood)+parseInt(data[i].fortybad))
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
					rank1value = parseInt(data[i].fortygood)+parseInt(data[i].fortybad);
					continue;
				}
				else if(rank2value <= parseInt(data[i].fortygood)+parseInt(data[i].fortybad))
				{
					rank5 = rank4;
					rank4 = rank3;
					rank3 = rank2;
					rank2 = data[i].number;

					rank5value = rank4value;
					rank4value = rank3value;
					rank3value = rank2value;
					rank2value = parseInt(data[i].fortygood)+parseInt(data[i].fortybad);
					continue;
				}
				else if(rank3value <= parseInt(data[i].fortygood)+parseInt(data[i].fortybad))
				{
					rank5 = rank4;
					rank4 = rank3;
					rank3 = data[i].number;

					rank5value = rank4value;
					rank4value = rank3value;
					rank3value =  parseInt(data[i].fortygood)+parseInt(data[i].fortybad);
					continue;
				}
				else if(rank4value <= parseInt(data[i].fortygood)+parseInt(data[i].fortybad))
				{
					rank5 = rank4;
					rank4 = data[i].number;

					rank5value = rank4value;
					rank4value =  parseInt(data[i].fortygood)+parseInt(data[i].fortybad);
					continue;
				}
				else if(rank5value <= parseInt(data[i].fortygood)+parseInt(data[i].fortybad))
				{
					rank5 = data[i].number;

					rank5value = parseInt(data[i].fortygood)+parseInt(data[i].fortybad);
					continue;
				}
				else
					continue;
			}
			var result1;	//좋싫 값에 해당하는 이름을 저장 할 변수 
			var result2;
			var result3;
			var result4;
			var result5;
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
			$(".grade1").text("1등 "+result1);	//답 표현
			$(".grade2").text("2등 "+result2);
			$(".grade3").text("3등 "+result3);
			$(".grade4").text("4등 "+result4);
			$(".grade5").text("5등 "+result5);
		}

		else if($("#manchart").is(":checked")==true)//30대 차트 
		{
			var rank1value = -100;	//1등의 좋 싫 값 
			var rank2value = -100;	//2등의 좋 싫 값
			var rank3value = -100;	
			var rank4value = -100;
			var rank5value = -100;
			for(var i =0; i<data.length;i++)
			{
				if(rank1value <= parseInt(data[i].mangood)+parseInt(data[i].manbad))
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
					rank1value = parseInt(data[i].mangood)+parseInt(data[i].manbad);
					continue;
				}
				else if(rank2value <= parseInt(data[i].mangood)+parseInt(data[i].manbad))
				{
					rank5 = rank4;
					rank4 = rank3;
					rank3 = rank2;
					rank2 = data[i].number;

					rank5value = rank4value;
					rank4value = rank3value;
					rank3value = rank2value;
					rank2value = parseInt(data[i].mangood)+parseInt(data[i].manbad);
					continue;
				}
				else if(rank3value <= parseInt(data[i].mangood)+parseInt(data[i].manbad))
				{
					rank5 = rank4;
					rank4 = rank3;
					rank3 = data[i].number;

					rank5value = rank4value;
					rank4value = rank3value;
					rank3value =  parseInt(data[i].mangood)+parseInt(data[i].manbad);
					continue;
				}
				else if(rank4value <= parseInt(data[i].mangood)+parseInt(data[i].manbad))
				{
					rank5 = rank4;
					rank4 = data[i].number;

					rank5value = rank4value;
					rank4value =  parseInt(data[i].mangood)+parseInt(data[i].manbad);
					continue;
				}
				else if(rank5value <= parseInt(data[i].mangood)+parseInt(data[i].manbad))
				{
					rank5 = data[i].number;

					rank5value = parseInt(data[i].mangood)+parseInt(data[i].manbad);
					continue;
				}
				else
					continue;
			}
			var result1;	//좋싫 값에 해당하는 이름을 저장 할 변수 
			var result2;
			var result3;
			var result4;
			var result5;
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
			$(".grade1").text("1등 "+result1);	//답 표현
			$(".grade2").text("2등 "+result2);
			$(".grade3").text("3등 "+result3);
			$(".grade4").text("4등 "+result4);
			$(".grade5").text("5등 "+result5);
		}

		else if($("#womanchart").is(":checked")==true)//30대 차트 
		{
			var rank1value = -100;	//1등의 좋 싫 값 
			var rank2value = -100;	//2등의 좋 싫 값
			var rank3value = -100;	
			var rank4value = -100;
			var rank5value = -100;
			for(var i =0; i<data.length;i++)
			{
				if(rank1value <= parseInt(data[i].womangood)+parseInt(data[i].womanbad))
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
					rank1value = parseInt(data[i].womangood)+parseInt(data[i].womanbad);
					continue;
				}
				else if(rank2value <= parseInt(data[i].womangood)+parseInt(data[i].womanbad))
				{
					rank5 = rank4;
					rank4 = rank3;
					rank3 = rank2;
					rank2 = data[i].number;

					rank5value = rank4value;
					rank4value = rank3value;
					rank3value = rank2value;
					rank2value = parseInt(data[i].womangood)+parseInt(data[i].womanbad);
					continue;
				}
				else if(rank3value <= parseInt(data[i].womangood)+parseInt(data[i].womanbad))
				{
					rank5 = rank4;
					rank4 = rank3;
					rank3 = data[i].number;

					rank5value = rank4value;
					rank4value = rank3value;
					rank3value =  parseInt(data[i].womangood)+parseInt(data[i].womanbad);
					continue;
				}
				else if(rank4value <= parseInt(data[i].womangood)+parseInt(data[i].womanbad))
				{
					rank5 = rank4;
					rank4 = data[i].number;

					rank5value = rank4value;
					rank4value =  parseInt(data[i].womangood)+parseInt(data[i].womanbad);
					continue;
				}
				else if(rank5value <= parseInt(data[i].womangood)+parseInt(data[i].womanbad))
				{
					rank5 = data[i].number;

					rank5value = parseInt(data[i].womangood)+parseInt(data[i].womanbad);
					continue;
				}
				else
					continue;
			}
			var result1;	//좋싫 값에 해당하는 이름을 저장 할 변수 
			var result2;
			var result3;
			var result4;
			var result5;
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
			$(".grade1").text("1등 "+result1);	//답 표현
			$(".grade2").text("2등 "+result2);
			$(".grade3").text("3등 "+result3);
			$(".grade4").text("4등 "+result4);
			$(".grade5").text("5등 "+result5);
		}

	});
}