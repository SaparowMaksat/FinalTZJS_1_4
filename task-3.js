// 1-ый способ
const unique = uni => {
	return uni.filter((value, index, array) => {
		return array.indexOf(value) === index
	})
}

console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3]))

// 2-ой способ

const unique2 = arr => {
	return [...new Set(arr)]
}

console.log(unique2([1, 1, 2, 2, 4, 2, 3, 7, 3]))
