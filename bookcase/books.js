var imgUrl = 'http://think2011.qiniudn.com/book-';
/* 1：在看 2：待看 3 归档 */

var books = [{
		name: '用AngularJS开发下一代Web应用',
		url: imgUrl + '1.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: 'HTML5和JavaScript Web应用开发',
		url: imgUrl + '2.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: 'CSS3实战',
		url: imgUrl + '3.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: 'CSS 禅意花园',
		url: imgUrl + '4.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: 'Don\'t Make Me Think!: A Common Sense Approach to Web',
		url: imgUrl + '5.jpg',
		type: '体验',
		reading: 3
	},

	{
		name: 'HTML5 与 CSS3 权威指南',
		url: imgUrl + '6.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: 'javascript 高级程序设计',
		url: imgUrl + '7.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: 'javascript 模式',
		url: imgUrl + '8.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: 'javascript 权威指南',
		url: imgUrl + '9.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: 'javascript 设计模式',
		url: imgUrl + '10.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: '高效程序员的45个习惯 敏捷开发修炼之道',
		url: imgUrl + '11.jpg',
		type: '其他',
		reading: 3
	},

	{
		name: '简约至上',
		url: imgUrl + '12.jpg',
		type: '体验',
		reading: 3
	},

	{
		name: '亲爱的界面',
		url: imgUrl + '13.jpg',
		type: '体验',
		reading: 3
	},

	{
		name: '人人都是产品经理',
		url: imgUrl + '14.jpg',
		type: '体验',
		reading: 3
	},

	{
		name: 'head first javascript',
		url: imgUrl + '15.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: '网站设计解构',
		url: imgUrl + '16.jpg',
		type: '前端',
		reading: 2
	},

	{
		name: '悟透javascript',
		url: imgUrl + '17.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: '响应式Web设计',
		url: imgUrl + '18.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: '一目了然',
		url: imgUrl + '19.jpg',
		type: '体验',
		reading: 3
	},

	{
		name: 'head first 设计模式',
		url: imgUrl + '20.jpg',
		type: '其他',
		reading: 3
	},

	{
		name: '深入浅出 node.js',
		url: imgUrl + '21.jpg',
		type: '后端',
		reading: 2
	},

	{
		name: 'Effective JavaScript: 编写高质量JavaScript代码的68个有效方法',
		url: imgUrl + '22.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: '意志力',
		url: imgUrl + '23.jpg',
		type: '其他',
		reading: 3
	},

	{
		name: '在你身边 为你设计',
		url: imgUrl + '24.jpg',
		type: '体验',
		reading: 3
	},

	{
		name: '锋利的jquery',
		url: imgUrl + '25.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: '了不起的 Node.js',
		url: imgUrl + '26.jpg',
		type: '后端',
		reading: 3
	},

	{
		name: 'javascript 面向对象编程指南',
		url: imgUrl + '27.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: 'head first PHP&MySql',
		url: imgUrl + '28.jpg',
		type: '后端',
		reading: 3
	},

	{
		name: 'head first AJAX',
		url: imgUrl + '29.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: 'mongoDB权威指南',
		url: imgUrl + '31.jpg',
		type: '后端',
		reading: 3
	},

	{
		name: 'RESTful Web Services Cookbook',
		url: imgUrl + '32.jpg',
		type: '其他',
		reading: 3
	},

	{
		name: 'CoffeeScript小书',
		url: imgUrl + '33.jpg',
		type: '其他',
		reading: 3
	},

	{
		name: '深入浅出CoffeeScript',
		url: imgUrl + '34.jpg',
		type: '其他',
		reading: 3
	},

	{
		name: 'javascript实战',
		url: imgUrl + '35.png',
		type: '前端',
		reading: 3
	},

	{
		name: 'Node.js实战（国内版）',
		url: imgUrl + '36.png',
		type: '后端',
		reading: 3
	},

	{
		name: '每周工作4小时',
		url: imgUrl + '37.png',
		type: '其他',
		reading: 3
	},

	{
		name: '写给大家看的设计书',
		url: imgUrl + '38.jpg',
		type: '体验',
		reading: 3
	},

	{
		name: '写给大家看的设计书：实例与创意',
		url: imgUrl + '39.jpg',
		type: '体验',
		reading: 2
	},

	{
		name: 'Mac 操作说明完全指南',
		url: imgUrl + '40.jpg',
		type: '其他',
		reading: 3
	},

	{
		name: 'JavaScript语言精粹',
		url: imgUrl + '41.jpg',
		type: '前端',
		reading: 3
	},

	{
		name: '大道至易',
		url: imgUrl + '42.png',
		type: '其他',
		reading: 2
	},

	{
		name: '重来',
		url: imgUrl + '43.png',
		type: '其他',
		reading: 3
	},

	{
		name: '重来2',
		url: imgUrl + '44.png',
		type: '其他',
		reading: 2
	},

	{
		name: '番茄工作法图解',
		url: imgUrl + '45.png',
		type: '其他',
		reading: 3
	},

	{
		name: '异类',
		url: imgUrl + '46.png',
		type: '其他',
		reading: 3
	},

	{
		name: 'Node.js实战',
		url: imgUrl + '47.png',
		type: '后端',
		reading: 1
	},

	{
		name: 'HTML5 Canvas核心技术 图形、动画与游戏开发',
		url: imgUrl + '48.png',
		type: '前端',
		reading: 3
	},

	{
		name: 'HTML5 Canvas游戏开发实战',
		url: imgUrl + '49.png',
		type: '前端',
		reading: 3
	},

	{
		name: '一万小时天才理论',
		url: imgUrl + '50.jpg',
		type: '其他',
		reading: 3
	},

	{
		name: '编写可测试的JavaScript代码',
		url: imgUrl + '51.png',
		type: '前端',
		reading: 3
	},

	{
		name: 'JavaScript异步编程',
		url: imgUrl + '52.png',
		type: '前端',
		reading: 3
	},

	{
		name: '拖拉一点也无妨',
		url: imgUrl + '53.png',
		type: '其他',
		reading: 3
	},

	{
		name: 'JavaScript设计模式与开发实践',
		url: imgUrl + '54.png',
		type: '前端',
		reading: 3
	},

	{
		name: 'React：引领未来的用户界面开发框架',
		url: imgUrl + '55.png',
		type: '前端',
		reading: 3
	},

	{
		name: 'JavaScript快速全栈开发',
		url: imgUrl + '56.png',
		type: '前端',
		reading: 3
	},

	{
		name: '超实用的JavaScript代码段',
		url: imgUrl + '57.png',
		type: '前端',
		reading: 3
	},

	{
		name: '编写可维护的javascript',
		url: imgUrl + '30.jpg',
		type: '前端',
		reading: 3
	}
];