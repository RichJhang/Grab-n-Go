//抓取訂單明細(daily)
var restUsername = document.getElementById("restUsername").value;
var spinIcon = document.getElementById("spinner");

function getDailyRevenue(date){
		//alert("Hello");
		var datepicker = document.getElementById("datepicker").value;
		var xhr = new XMLHttpRequest();
		xhr.open("GET","../DailyRevenue.do?datepicker=" + datepicker + "&restUsername=" + restUsername,true);
		xhr.send();
		spinIcon.style.display = "inline";
		xhr.onreadystatechange = function(){
			if( xhr.readyState == 4 && xhr.status == 200){
				spinIcon.style.display = "none";
				//alert("Got you!");
				var dailyOrders = JSON.parse(xhr.responseText);
				var table = document.getElementById("orderTable");
				var divPie = document.getElementById("pieChart");
				
				
				if(dailyOrders.length == 0){
					alert("目前尚未有訂單記錄喔");
				}
				table.innerHTML = "<tr><th>訂購日期</th><th>餐點名稱</th><th>銷售數量</th><th>銷售總額</th></tr>";
				for (var i=0; i < dailyOrders.length ; i++ ){ 
					/*
					 * console.log("date = " + datepicker + ", itemName = " +
					 * dailyOrders[i].item_name + ", itemAmount = " +
					 * dailyOrders[i].item_amount + ",itemPrice =" +
					 * dailyOrders[i].item_price);
					 */
				 	var tr = document.createElement("tr"); 
					
					var td1 = document.createElement("td");
					td1.textContent = datepicker;
					
					var td2 = document.createElement("td");
					td2.textContent = dailyOrders[i].item_name;
					
					var td3 = document.createElement("td");
					td3.textContent = dailyOrders[i].item_amount;
					
					var td4 = document.createElement("td");
					td4.textContent = "$"+ dailyOrders[i].item_price;
					
					tr.appendChild(td1);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					
					table.appendChild(tr);
					
					
				 }  
				
// 圓餅圖開始
				var contentSize = dailyOrders.length;
				var content = [];
				for(var j=0; j<contentSize ; j++) {
					content.push(
					{"label":dailyOrders[j].item_name, 
					"value":dailyOrders[j].item_amount}) ;
//					,"color": "#" + dailyOrders[j].item_price
				}

			    var pie = new d3pie("pieChart", {
		      "header": {
		        "title": {
		          "text": "",
		          "fontSize": 22,
		          "font": "Microsoft JhengHei"
		        },
		        "subtitle": {
		          "text": "",
		          "color": "#999999",
		          "fontSize": 10,
		          "font": "verdana"
		        },
		        "titleSubtitlePadding": 12
		      },
		      "footer": {
		        "text": "統計日期：" + datepicker,
		        "color": "#4d4d4d",
		        "fontSize": 16,
		        "font": "Microsoft JhengHei",
		        "location": "bottom-center"
		      },
		      "size": {
		        "canvasHeight": 400,
		        "canvasWidth": 800,
		        "pieOuterRadius": "100%"
		      },
		      "data": {
		    	    sortOrder: "value-desc",
		        content
		      },
		      "labels": {
		        "outer": {
		          "format": "label-percentage1",
		          "pieDistance": 24
		        },
		        "inner": {
		          "format": "value"
		        },
		        "mainLabel": {
		          "font": "verdana",
		          "fontSize": 14,
		        },
		        "percentage": {
		          "color": "black",
		          "font": "verdana",
		          "decimalPlaces": 0
		        },
		        "value": {
		          "color": "black",
		          "font": "verdana",
		          "fontSize": 14,
		        },
		        "lines": {
		          "enabled": true,
		          "color": "#cccccc"
		        },
		        "truncation": {
		          "enabled": true
		        }
		      },
		      "effects": {
		        "pullOutSegmentOnClick": {
		          "effect": "linear",
		          "speed": 400,
		          "size": 10
		        }
		      },
		      "callbacks": {}
		    });
//			    //不保留原本的chart, 會重畫
			    $(function() {
			    	$("#submit").on("click", function(date) {
			    		
			    		if (pie !== null) {
			    			pie.destroy();
			    			alert("請選擇日期呦！");
			    			pie = null;
			    		}
			    	});
			    });
			}
		}
	}
