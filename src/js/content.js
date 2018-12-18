import * as contentful from 'contentful';

const client = contentful.createClient({
	space: CONTENTFUL_SPACE,
	accessToken: CONTENTFUL_TOKEN
});

///
// const getPages = () => {
// 	return client.getEntries({
// 	  content_type: 'page'
// 	})
// 	.then( (response) => {
// 		return JSON.stringify(response.items)
// 	})
// 	.catch(console.error)
// }

// const pages = getPages();
///

const getPages = () => {
	return client.getEntries({
	  content_type: 'page'
	})
	.then( (response) => {
		return response.items
	})
	.catch(console.error)
}

var pages = getPages()

// const

export default pages;
// export { projects };