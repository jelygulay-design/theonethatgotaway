// 1 CLASS
//IMPLEMENT ABSTRACTION AND POLYMORPHISM
//3 METHODS
class Payment50{
    pay(){throw new Error("Pay method must be emplemented.");}
    cancel(){return ("Payment Cancelled.");}
    status() {return ("Payment Pending.")}
}

class CashPayment50 extends Payment50{
    pay() {return("Paid with payment.");}
    status() {return("Payment completed.");}
}

const payment50 = new CashPayment50();
console.log(payment50.pay(), payment50.cancel(),payment50.status());
