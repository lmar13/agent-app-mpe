import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AgentService } from './agent.service';
import { Agent } from './agent';

@Controller('agent')
export class AgentController {
  constructor(private agentService: AgentService) {}

  @Post()
  createAgent(@Body() { id }: Agent): Agent {
    try {
      const test = this.agentService.createAgent(id);
      console.log(test);
      return test;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
