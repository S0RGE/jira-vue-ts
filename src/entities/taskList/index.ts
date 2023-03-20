import { UUID } from 'uuid-generator-ts';

import { Task } from "../task";
import { UniqueId, Title } from "../types";

export type TaskList = {
  id: UniqueId;
  title: Title;
  tasks: Array<Task>;
}

export function addTasks(taskList: TaskList, task: Task): TaskList {
  return {
    id: taskList.id,
    title: taskList.title,
    tasks: [...taskList.tasks, task]
  };
}

export function removeTask(taskList: TaskList, task: Task): TaskList {
  return {
    id: taskList.id,
    title: taskList.title,
    tasks: taskList.tasks.filter(t => t.id !== task.id)
  };
}

export function createTaskList(title: Title): TaskList {
  const id = new UUID();
  return {
    id: id.getDashFreeUUID(),
    title: title,
    tasks: new Array<Task>(),
  }
}