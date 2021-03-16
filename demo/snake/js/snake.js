// 自调用函数，产生小蛇对象
(function() {
    // 存放每个小蛇数组
    var elements = [];
    // 小蛇的构造函数
    function Snake(width, height, direction) {
        // 小蛇的宽高
        this.width = width || 20;
        this.height = height || 20;
        // 小蛇的方向，开始默认向右
        this.direction = direction || "right";
        // 小蛇的每一节身体
        this.body = [
          {x : 3, y : 2, color : "red"}, // 头
          {x : 2, y : 2, color : "green"},
          {x : 1, y : 2, color : "green"}
        ];
    }
    // 往Snake原型对象中添加初始化方法
    Snake.prototype.init = function(map) {
        // 调用删除旧蛇函数，避免出现自增长蛇
        removeSnake();
        // 创建小蛇每一个身体
        var i = 0, len = this.body.length;
        for (; i < len; i++) {
            // 本节身体
            var body = this.body[i];
            // 创建元素
            var obj = document.createElement("div");
            // 设置样式
            obj.style.width = this.width + "px";
            obj.style.height = this.height + "px";
            obj.style.backgroundColor = body.color;
            // 脱离文档流
            obj.style.position = "absolute";
            // 设置坐标
            obj.style.left = body.x * this.width + "px";
            obj.style.top = body.y * this.height + "px";
            // 添加到地图上
            map.appendChild(obj);
            // 推入小蛇数组中
            elements.push(obj);
        }
    };
    // 小蛇移动方法
    Snake.prototype.move = function(food, map) {
        // 每节身体的坐标变为上一节身体的坐标
        var i = this.body.length - 1;
        for (; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        // 判断小蛇方向，舌头单独移动
        switch (this.direction) {
          case "right":
              this.body[0].x += 1;
              break;
          case "left":
              this.body[0].x -= 1;
              break;
          case "top":
              this.body[0].y -= 1;
              break;
          case "bottom":
                this.body[0].y += 1;
                break;
        }
    }
    // 私有方法，用于删除旧小蛇
    function removeSnake() {
      var i = elements.length - 1;
      for (; i >= 0; i--) {
          var div = elements[i];
          // 从地图中删除div
          div.remove();
          // 从数组中移除
          elements.splice(i, 1);
      }
    }
    // 将Snake暴露给window
    window.Snake = Snake;
}());
