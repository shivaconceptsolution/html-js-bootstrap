class BillCalc
{
    accept(price,qty)
    {
        this.price=price
        this.qty=qty
    }
    calcBill()
    {
       this.bill = this.price*this.qty
       
    }
    display()
    {
        console.log("bill is ",this.bill)
    }
}

class BillCalcnew extends BillCalc
{
    calcBill()
    {
        this.bill = this.price*this.qty
        this.bill = this.bill + this.bill*0.18
       
    }
}

//var obj = new BillCalcnew()
var obj = new BillCalc()
obj.accept(120,7)
obj.calcBill()
obj.display()