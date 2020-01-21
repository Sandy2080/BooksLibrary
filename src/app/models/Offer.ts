export class Offer {
    type: string;
    value: number;
    sliceValue?: number;
    constructor(obj: any) {
      return (
        this.type = obj.type,
        this.value = obj.value,
        this.sliceValue = obj.sliceValue
      );
    }
}
export class CommercialOffer extends Offer {
  discountedValue: number = 0
  constructor(offer: Offer) { 
    super(offer); 
  }
  calculate = (total: number, offer: Offer) => {
    switch (offer.type) {
      case "percentage": this.percentage(total)
      case "minus": this.minus(total)
      case "slice": this.slice(total)
    }
  }
  percentage = (price: number) => this.discountedValue = price - (price * this.value) / 100;
  minus = (price: number) => this.discountedValue = price - this.value
  slice = (price: number) => {
    if (!this.sliceValue) { return }
    if (price < this.sliceValue) { return }
    const slices = price / this.sliceValue;
    this.discountedValue = price - (slices * this.sliceValue!);
  };
}


