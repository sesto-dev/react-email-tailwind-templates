// @ts-nocheck

import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core'
import { motion } from 'framer-motion'

const Card = () => {
	return (
		<motion.div
			className="bg-white rounded-lg p-4 w-32 h-48 shadow"
			whileHover={{ scale: 1.1 }}
		>
			<h3 className="text-gray-800 font-bold mb-2">Card Title</h3>
			<p className="text-gray-600">Card description goes here.</p>
		</motion.div>
	)
}

const GameBoard = () => {
	const draggable = useDraggable({
		id: 'card',
	})

	const droppable = useDroppable({
		id: 'card-drop',
	})

	const { attributes, listeners, setNodeRef, transform, isDragging } =
		draggable

	const { isOver, setNodeRef: setDropNodeRef } = droppable

	return (
		<DndContext>
			<div className="bg-green-800 p-4 flex justify-center">
				<div className="flex">
					<div className="flex flex-col items-center">
						<h2 className="text-white text-lg mb-2">Player Hand</h2>
						<div
							className={`flex space-x-2 ${
								isOver ? 'bg-yellow-200' : ''
							}`}
							ref={setDropNodeRef}
						>
							<motion.div
								{...attributes}
								{...listeners}
								ref={setNodeRef}
								style={{ transform }}
								whileHover={{ scale: 1.1 }}
								className={`relative ${
									isDragging ? 'opacity-50' : ''
								}`}
							>
								<Card />
							</motion.div>
							<motion.div
								{...attributes}
								{...listeners}
								ref={setNodeRef}
								style={{ transform }}
								whileHover={{ scale: 1.1 }}
								className={`relative ${
									isDragging ? 'opacity-50' : ''
								}`}
							>
								<Card />
							</motion.div>
							<motion.div
								{...attributes}
								{...listeners}
								ref={setNodeRef}
								style={{ transform }}
								whileHover={{ scale: 1.1 }}
								className={`relative ${
									isDragging ? 'opacity-50' : ''
								}`}
							>
								<Card />
							</motion.div>
						</div>
					</div>
					<div className="flex flex-col items-center ml-4">
						<h2 className="text-white text-lg mb-2">
							Playing Field
						</h2>
						<div
							className={`flex space-x-2 ${
								isOver ? 'bg-yellow-200' : ''
							}`}
							ref={setDropNodeRef}
						>
							<motion.div
								{...attributes}
								{...listeners}
								ref={setNodeRef}
								style={{ transform }}
								whileHover={{ scale: 1.1 }}
								className={`relative ${
									isDragging ? 'opacity-50' : ''
								}`}
							>
								<Card />
							</motion.div>
							<motion.div
								{...attributes}
								{...listeners}
								ref={setNodeRef}
								style={{ transform }}
								whileHover={{ scale: 1.1 }}
								className={`relative ${
									isDragging ? 'opacity-50' : ''
								}`}
							>
								<Card />
							</motion.div>
							<motion.div
								{...attributes}
								{...listeners}
								ref={setNodeRef}
								style={{ transform }}
								whileHover={{ scale: 1.1 }}
								className={`relative ${
									isDragging ? 'opacity-50' : ''
								}`}
							>
								<Card />
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</DndContext>
	)
}

export default GameBoard
