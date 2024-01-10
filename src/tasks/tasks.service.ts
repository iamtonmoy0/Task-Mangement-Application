import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, taskStatus } from './task.model';
import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }
  // get task by id
  getTaskById(id: string) {
    const result = this.tasks.find((task) => task.id === id);
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }
  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: taskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
  deleteTaskById(id: string) {
    return this.tasks.filter((task) => task.id !== id);
  }
  updateTask(id: string, status: taskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
