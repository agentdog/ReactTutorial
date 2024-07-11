function objectList(objects) {
	objectListItem = []

	for (let obj in objects) {
		objectListItem.push(<li>{obj}</li>)
	}

	return (
		<ul>
			{objectListItem}
		</ul>
	)
}