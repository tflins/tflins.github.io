$(function() {
	// 老鼠可能会出现的位置
	var location = [
		{top: 0, left: 0},
		{top: 154, left: 0},
		{top: 308, left: 0},
		{top: 0, left: 146},
		{top: 154, left: 146},
		{top: 308, left: 146},
		{top: 0, left: 292.5},
		{top: 154, left: 292.5},
		{top: 308, left: 292.5}
	];
	// 老鼠的动作图像
	var mouseImg = [
		"url(images/show1.gif)", 
		"url(images/show2.gif)", 
		"url(images/show3.gif)", 
		"url(images/show4.gif)", 
		"url(images/show5.gif)", 
		"url(images/show6.gif)", 
		"url(images/show5.gif)", 
		"url(images/show4.gif)", 
		"url(images/show3.gif)", 
		"url(images/show2.gif)", 
		"url(images/show1.gif)", 
		"url(images/emptyhole.jpg)"
	];
	
	// 开始游戏
	$(".console button").click(function() {
		
		// 调用老鼠动作函数
		mouseAction();
		
		
	});
	
	// 老鼠随机位置函数
	function mousePosition($event) {
		// 产生0-9随机数
		var num = randomFrom(0, 9);
		//$mouse.offset({left: 0, top: 0}); 不可用，这是根据浏览器窗口定位
		$event.css(location[num]);
		
		//console.log(num);
	}
	
	//获取指定区间范围随机数，包括lowerValue和upperValue
	function randomFrom(lowerValue,upperValue) {
		return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
	}
	
	// 老鼠动作函数
	function mouseAction() {
		var starGame = setInterval(function() {
			// 新建一个div 地鼠
			var $mouse = $("<div></div>");
			$mouse.css({
				width: "146px",
				height: "154px",
				position: "absolute"
			});
			$(".main").append($mouse);
			
			// 调用老鼠随机位置函数
			mousePosition($mouse);
		
			// 老鼠动画
			var i = 0;
			var mousedh = setInterval(function() {
				var temp = mouseImg[i];
				$mouse.css("background", temp);
				i++;
				if( i === 12) {
					clearInterval(mousedh);
					$mouse.remove();
				}
			}, 50);
			
			// 调用得分函数
			score($mouse);
			
			// console.log($mouse.position());
		}, 1250);
	}
	
	// 点击老鼠，得分函数
	function score($event) {
		$event.click(function() {
			$event.css("background", "url(images/hit.gif)");
			var str = $(".head span").text();
			str = Number(str) + 10;
			// console.log(str);
			$(".head span").text(str);
		});
	}
});