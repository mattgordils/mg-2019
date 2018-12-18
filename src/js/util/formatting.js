const sanitize = (str) => {
	str = str.replace(/\s+/g, '-').toLowerCase();
	return str
}

export { sanitize };
export default sanitize;