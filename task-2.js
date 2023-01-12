console.log(isEqualSymbols('адрес', 'среда')) // true
console.log(isEqualSymbols('ноутбук', 'программист')) // false

function isEqualSymbols(str1, str2) {
	if (str1.length !== str2.length) {
		return false
	}

	const strSymbols1 = str1.split('').sort().join('')
	const strSymbols2 = str2.split('').sort().join('')

	return strSymbols1 === strSymbols2
}
