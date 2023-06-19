export default function getPersianNumerals(number) {
	let persianNumber = ''

	const persian = {
		0: '۰',
		1: '۱',
		2: '۲',
		3: '۳',
		4: '۴',
		5: '۵',
		6: '۶',
		7: '۷',
		8: '۸',
		9: '۹',
	}

	number = number.toString().split('')

	for (let i = 0; i < number.length; i++) {
		number[i] = persian[number[i]] || number[i]
	}

	for (let i = 0; i < number.length; i++) {
		persianNumber += number[i]
	}

	return persianNumber
}
