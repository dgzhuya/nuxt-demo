export default defineEventHandler(async event => {
	const body = await readBody(event).catch(err => {
		console.log('err: ', err)
	})
	const data = [
		{
			id: 1
		},
		{
			id: 2
		},
		{
			id: 3
		},
		{
			id: 4
		},
		{
			id: 5
		}
	]
	try {
		const i = parseInt(body.id)
		return data.slice(0, i)
	} catch (error) {
		console.log('error: ', error)
		return data
	}
})
