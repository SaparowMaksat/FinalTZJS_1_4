const range = [1016, 1937]
let luckyNumber = 0

for (let i = range[1]; i > range[0]; i--) {
	if (!(i % 3 || i % 7) && i % 5 && i % 2) {
		luckyNumber = i
		break
	}
}

console.log(luckyNumber)
