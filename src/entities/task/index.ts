import { UUID } from 'uuid-generator-ts';

import { UniqueId, Title, TaskMessage } from "../types";

export type TaskChildrenIds = Array<UniqueId>

export type Task = {
  id: UniqueId;
  title: Title;
  message: TaskMessage;
  children: TaskChildrenIds;
}

export function createTask(title: Title, message: TaskMessage): Task {
  const id = new UUID();
  return {
    id: id.getDashFreeUUID(),
    title,
    message,
    children: new Array<UniqueId>
  }
}

export function updateTaskTitle(task: Task, title: Title): Task {
  task.title = title;
  return task;
}

export function updateTaskMessage(task: Task, message: TaskMessage): Task {
  task.message = message;
  return task;
}

export function addTaskChildren(task: Task, taskChildrenIds: TaskChildrenIds): Task {
  return {
    id: task.id,
    title: task.title,
    message: task.message,
    children: [...task.children, ...taskChildrenIds],
  }
} 