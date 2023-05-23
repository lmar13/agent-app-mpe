export class Agent {
  id = 0;
  supplierPolicy = 0;
  recipientPolicy = 0;
  trust = 0;
  serviceAvailability = 0;
  serviceReception = 0;
  isStrategicAgent = false;
  wasRecipient = false;
  suppliersAmount = 0;
  honestSuppliersCount = 0;
  strategicSuppliersCount = 0;
  availabilitySupplierSum = 0;
  suppliersNumbers: number[] = [];

  copyValues: (agent: Agent) => void;
  calculateRaeIT: () => number;

  resetForNextCycle() {
    this.suppliersAmount = 0;
    this.serviceReception = 0;
    this.serviceAvailability = 0;
    this.honestSuppliersCount = 0;
    this.strategicSuppliersCount = 0;
    this.availabilitySupplierSum = 0;
    this.supplierPolicy = 0;
    this.recipientPolicy = 0;
  }
}
