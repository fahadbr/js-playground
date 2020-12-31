
function arraysEqStrings() {
	console.log('arraysEqStrings')
	let a = [1,2,3]
	let b = [1,2,3]
	let c = '1,2,3'

	//console.log(a == c) does not compile
	//console.log(b == c) does not compile
	console.log("a == b", a == b)
	console.log("a === b", a === b)
}

function appendingStringToNull() {
	console.log('appendingStringToNull')
	let t = null
	//t += 'test' does not compile
	console.log(t)
}

function arrayEquality() {
	console.log('arrayEquality')
	console.log("['a', 'b'] !== ['a', 'b']", ['a', 'b'] !== ['a', 'b'])
	console.log("['a', 'b'] != ['a', 'b']", ['a', 'b'] != ['a', 'b'])
	console.log("['a', 'b'] == ['a', 'b']", ['a', 'b'] == ['a', 'b'])
}

function stringStuff() {
	console.log('stringStuff')

	let wtf: any = 'wtf'
	console.log("'wtf' instanceof String", wtf instanceof String)
	console.log("typeof 'wtf' == 'string'", typeof 'wtf' == 'string')
	console.log("typeof String('wtf')", typeof String('wtf'))
	console.log("String('wtf') == 'wtf'", String('wtf') == 'wtf')
}

function toStringOnNums() {
	console.log('toStringOnNums')
	console.log("3..toString", 3..toString())
	// console.log("3.toString", 3.toString()) doesn't compile
}

arraysEqStrings()
appendingStringToNull()
arrayEquality()
stringStuff()
toStringOnNums()
