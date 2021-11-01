// 自调用函数，产生小方块(食物)对象
(function() {
// 存放食物元素数组
var elements = [];
// 食物构造函数
function Food(width, height, color) {
  // 食物的x,y坐标和宽高, 颜色
  this.x = 0;
  this.y = 0;
  this.width = width || 20;
  this.height = height || 20;
  this.color = color || "green";
}
// 向Food原型对象中添加初始化方法
Food.prototype.init = function(map) {
  // 调用私有方法删除食物避免出现多个食物
  removeFood();
  // 构建食物元素
  var div = document.createElement("div");
  // 随机位置
  this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
  this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
  // 设置食物样式
  div.style.width = this.width + "px";
  div.style.height = this.height  + "px";
  div.style.backgroundColor = this.color;
  div.style.position = "absolute";
  div.style.left = this.x + "px";
  div.style.top = this.y + "px";
  // 将其添加到地图上
  map.appendChild(div);
  // 推入食物数组，方便查找
  elements.push(div);
};
// 私有方法，用于删除食物
function removeFood() {
  var i = 0, len =  elements.length;
  for (; i < len; i++) {
      var div = elements[i];
      div.remove();
      elements.splice(i, 1);
  }
}
window.Food = Food;
}());
