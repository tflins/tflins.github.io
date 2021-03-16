// 自调用函数 --- 游戏对象
(function() {
    var that = null;
    // 游戏对象构造函数
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    // 初始化游戏
    Game.prototype.init = function() {
        this.food.init(this.map);
        this.snake.init(this.map);
        this.runSnake();
        this.bindKey();
    };
    // 移动小蛇
    Game.prototype.runSnake = function() {
        var setTime = setInterval(function() {
            this.snake.move(this.food, this.map);
            this.snake.init(this.map);
            // 获取地图的最大横纵坐标
            var maxX = this.map.offsetWidth / this.snake.width;
            var maxY = this.map.offsetHeight / this.snake.height;
            // 判断小蛇是否撞墙
            if (this.snake.body[0].x >= maxX || this.snake.body[0].x < 0) {
                alert("撞墙咯！");
                clearInterval(setTime);
            }
            if (this.snake.body[0].y >= maxY || this.snake.body[0].y < 0) {
                alert("撞墙咯！");
                clearInterval(setTime);
            }
            // 用于测试console.log(this.snake.body[0].x + "====" + this.food.x);
            // 判断是否吃到食物
            if (this.snake.body[0].x === (this.food.x / this.food.width) && this.snake.body[0].y === (this.food.y  / this.food.height)) {
                // 复制蛇的最后一节身体
                this.snake.body.push({
                    x : this.snake.body[this.snake.body.length - 1].x,
                    y : this.snake.body[this.snake.body.length - 1].y,
                    color : "green"
                  });
                // 初始化食物
                this.food.init(this.map);
            }
        }.bind(that) ,150);
    };
    // 控制小蛇方向
    Game.prototype.bindKey = function() {
        // 给文档注册键盘事件
        document.onkeydown = function(event) {
            switch (event.keyCode) {
                case 37:
                    // 排除反方向，避免蛇可以180度转向
                    if (this.snake.direction === "right") {
                        return false;
                    }
                    // 改变蛇的方向
                    this.snake.direction = "left";
                    break;
                case 38:
                  if (this.snake.direction === "bottom") {
                      return false;
                  }
                  this.snake.direction = "top";
                  break;
                case 39:
                    if (this.snake.direction === "left") {
                        return false;
                    }
                    this.snake.direction = "right";
                    break;
                case 40:
                    if (this.snake.direction === "top") {
                        return false;
                    }
                    this.snake.direction = "bottom";
                    break;
            }
        }.bind(that);
    };
    // 将其暴露给window
    window.Game = Game;
}());
