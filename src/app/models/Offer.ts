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
         percentage = (price: number) =>  price - (price * this.value) / 100;
        
         minus = (price: number) =>  price - this.value
         slice = (price: number) => {
           if (!this.sliceValue ) { return } 
           if (price < this.sliceValue) { return } 
           const slices = price / this.sliceValue;
           return price - (slices * this.sliceValue!);
         };
       }
