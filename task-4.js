// 1-y method Function Arrow

const isPalindrome = str => {
	const reversed = str.split('').reverse().join('')
	return str === reversed
}

console.log(isPalindrome('racecar'))
console.log(isPalindrome('programmer'))

// 2-oy method Function Declaration

console.log(isPalindrome2('racecar'))
console.log(isPalindrome2('programmer'))

function isPalindrome2(str) {
	const reversed = str.split('').reverse().join('')
	return str === reversed
}
