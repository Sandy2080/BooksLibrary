
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
  discountValue: number = 0
  constructor(offer: Offer) { 
    super(offer); 
  }
  calculate = (total: number, offer: Offer) => {
    switch (offer.type) {
      case "percentage": return this.percentage(total) 
      case "minus": return this.minus()
      case "slice": return this.slice(total)
      default: return false
    }
  }
  percentage = (price: number) => {
    this.discountValue = (price * this.value) / 100;
  }
  minus = () => {
    this.discountValue = this.value
  }
  slice = (price: number) => {
    if (!this.sliceValue || price < this.sliceValue) { return }
    const slices = price / this.sliceValue;
    this.discountValue = (slices * this.sliceValue!)
  };
}

export {
  Offer, 
  CommercialOffer
}
