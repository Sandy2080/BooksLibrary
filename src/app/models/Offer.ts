class Offer {
  type: string;
  value: number;
  sliceValue?: number;
  constructor(obj: any) {
    this.type = obj.type;
    this.value = obj.value;
    this.sliceValue = obj.sliceValue && obj.sliceValue;
  }
}
class CommercialOffer extends Offer {
  discountValue: number = 0;
  constructor(offer: Offer, total: number) {
    super(offer);
    this.calculate(total);
  }
  protected calculate = (total: number) => {
    switch (this.type) {
      case 'percentage':
        return this.percentage(total);
      case 'minus':
        return this.minus();
      case 'slice':
        return this.slice(total);
      default:
        return false;
    }
  };
  protected percentage = (price: number) => {
    this.discountValue = (price * this.value) / 100;
  };
  protected minus = () => {
    this.discountValue = this.value;
  };
  protected slice = (price: number) => {
    if (!this.sliceValue || price < this.sliceValue) {
      return;
    }
    const slices = price / this.sliceValue;
    this.discountValue = slices * this.value;
  };
}
export { Offer, CommercialOffer };
