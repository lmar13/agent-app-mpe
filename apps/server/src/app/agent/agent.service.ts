import { Injectable } from '@nestjs/common';
import { Agent } from './agent';

@Injectable()
export class AgentService {
  private static readonly BEGINNING_TRUST_LEVEL = 1;
  private mStrategicCount = 10;

  createAgent(id: number): Agent {
    const agent = this.create();
    agent.id = id;

    if (id < this.mStrategicCount) agent.isStrategicAgent = true;

    console.log('Created agent: ', agent.id);
    return agent;
  }

  private create(): Agent {
    const agent = new Agent();
    agent.trust = AgentService.BEGINNING_TRUST_LEVEL;
    return agent;
  }
}
