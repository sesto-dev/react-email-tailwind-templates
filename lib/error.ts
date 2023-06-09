export async function handleError({
	error,
	comment,
}: {
	error: any
	comment: string
}) {
	console.log({ error, comment })
}
