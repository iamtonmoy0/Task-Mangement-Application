import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, taskStatus } from './task.model';
import { createTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }
  @Post()
  crateTask(@Body() createTaskDto: createTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }
  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTaskById(id);
  }
  @Patch('/:id')
  updateTask(@Param('id') id: string, @Body('status') status: taskStatus) {
    return this.taskService.updateTask(id, status);
  }
}
