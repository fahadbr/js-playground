
function arraysEqStrings() {
	let a = [1,2,3]
	let b = [1,2,3]
	let c = '1,2,3'

	//console.log(a == c) does not compile
	//console.log(b == c) does not compile
	console.log("a == b", a == b)
	console.log("a === b", a === b)
}

function appendingStringToNull() {
	let t = null
	//t += 'test' does not compile
	console.log(t)
}

arraysEqStrings()
appendingStringToNull()
