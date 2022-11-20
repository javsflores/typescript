class VehicleClass {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new VehicleClass('orange');
console.log(vehicle);

class CarClass extends VehicleClass {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new CarClass(4, 'red');
car.startDrivingProcess();
