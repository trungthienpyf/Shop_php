var category =document.getElementById('category');


category.onclick= function (e) {
	e.preventDefault();
	console.log('1');
	document.getElementById('category_sub').classList.toggle('display_click');
	
	document.getElementById('toggle_icon').classList.toggle('fa-sort-down');
}