function objectList() {
	let objectListItem = ['Item 1', 'Item 2', 'Item 3']

	for (let obj in objectListItem) {
		objectListItem.push(<li>{obj}</li>)
	}

	return (
		<ul>
			{objectListItem}
		</ul>
	)
}

export default objectList