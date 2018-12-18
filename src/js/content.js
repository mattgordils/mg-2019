import * as contentful from 'contentful';

const client = contentful.createClient({
	space: CONTENTFUL_SPACE,
	accessToken: CONTENTFUL_TOKEN
});

//

const pages = () => {
	return client.getEntries({
	  content_type: 'page'
	})
	.then( (response) => {
		return response
	})
	.catch(console.error)
}

//

const projects = () => {
	return client.getEntries({
	  content_type: 'project'
	})
	.then( (response) => {
		return response
	})
	.catch(console.error)
}

export default pages;
export { projects };