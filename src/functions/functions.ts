export const dateFormater = (date: string): string => {
	const options: {} = {
		day: 'numeric',
		month: 'numeric',
	}

	if (date) {
		return new Date(date).toLocaleString('ru', options)
	} else return new Date().toLocaleString('ru', options)
}
