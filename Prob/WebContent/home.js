/**
 * 
 */

let srcList = [
	"./img/3.jpg",
	"./img/2.jpg",
	"./img/1.jpg",
	"./img/4.jpg",
];

let index = 1;
window.onload = function(){
	let img1 = document.querySelector('#img');
	img1.src = srcList[index];
	
	let next = document.querySelector("#next");
	next.onclick = function(){
		index++;
		img1.src = srcList[index%srcList.length];
	}
	
	let prev = document.querySelector('#prev');
	prev.onclick = function(){
		index--;
		if(index < 0){
			index = srcList.length;
		}
		img1.src = srcList[index%srcList.length];
	}
}