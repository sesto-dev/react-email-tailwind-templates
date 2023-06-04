import { useState } from 'react'
import { DndContext, useDroppable, useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { Button } from './ui/button'

export function Droppable(props) {
	const { isOver, setNodeRef } = useDroppable({
		id: 'droppable',
	})
	const style = {
		color: isOver ? 'green' : undefined,
	}

	return (
		<Button ref={setNodeRef} style={style}>
			{props.children}
		</Button>
	)
}

export function Draggable(props) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: props.id,
	})
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined

	return (
		<Button ref={setNodeRef} style={style} {...listeners} {...attributes}>
			{props.children}
		</Button>
	)
}

export default function DragAndDrop() {
	const containers = ['A', 'B', 'C']
	const [parent, setParent] = useState(null)
	const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>

	return (
		<DndContext onDragEnd={handleDragEnd}>
			{parent === null ? draggableMarkup : null}

			{containers.map((id) => (
				// We updated the Droppable component so it would accept an `id`
				// prop and pass it to `useDroppable`
				<Droppable key={id} id={id}>
					{parent === id ? draggableMarkup : 'Drop here'}
				</Droppable>
			))}
		</DndContext>
	)

	function handleDragEnd(event) {
		const { over } = event

		// If the item is dropped over a container, set it as the parent
		// otherwise reset the parent to `null`
		setParent(over ? over.id : null)
	}
}
