import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [
    {
      id: 0,
      name: 'tonmoy',
    },
  ];

  getAllTasks() {
    return this.tasks;
  }
}
