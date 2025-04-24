import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../store/tasksSlice';

const TasksList = () => {
  const dispatch = useDispatch();
  const { items: tasks, status } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (status === 'loading') return <p>Загрузка задач...</p>;
  if (status === 'failed') return <p>Ошибка при загрузке</p>;

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.title} - {task.completed ? 'Выполнено' : 'В процессе'}
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
