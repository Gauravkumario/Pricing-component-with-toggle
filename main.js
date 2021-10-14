const monthlybtn = document.querySelector('#monthly-btn');
const annuallybtn = document.querySelector('#annually-btn');

monthlybtn.addEventListener('click', () =>{
	monthlyBtn();
})


annuallybtn.addEventListener('click', () =>{
	annuallyBtn();
})

/* ------------------------ */
function monthlyBtn() {
	document.getElementById('annually-btn').style.visibility = "visible";
	document.getElementById('monthly-btn').style.visibility = "hidden";
	document.getElementById('value-1').textContent = "199.99";
	document.getElementById('value-2').textContent = "249.99";
	document.getElementById('value-3').textContent = "399.99";
}
/* ------------------------- */
function annuallyBtn() {
	document.getElementById('annually-btn').style.visibility = "hidden";
	document.getElementById('monthly-btn').style.visibility = "visible";
	document.getElementById('value-1').textContent = "19.99";
	document.getElementById('value-2').textContent = "24.99";
	document.getElementById('value-3').textContent = "39.99";
}