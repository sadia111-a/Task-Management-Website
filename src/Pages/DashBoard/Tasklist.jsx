import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import useMyTask from "../../hooks/useMyTask";

const Tasklist = () => {
  const [tasks, refetch] = useMyTask();
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newTasks = [...taskList];
    const [movedTask] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, movedTask);

    setTaskList(newTasks);
  };
  return (
    <div className="container mx-auto mt-8">
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <h2 className="text-2xl font-bold mb-4">Todo</h2>
          <Droppable droppableId="todo">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-200 p-4 rounded-md"
              >
                {taskList.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-3 mb-2 rounded-md shadow-md"
                      >
                        {task.title}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        {/* 'Ongoing' list */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Ongoing</h2>
          <Droppable droppableId="ongoing">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-200 p-4 rounded-md"
              >
                {/* Render tasks for 'Ongoing' list similarly */}
                {/* Use a new array for ongoing tasks and update state accordingly */}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        {/* 'Completed' list */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Completed</h2>
          <Droppable droppableId="completed">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-200 p-4 rounded-md"
              >
                {/* Render tasks for 'Completed' list similarly */}
                {/* Use a new array for completed tasks and update state accordingly */}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Tasklist;
