class Bank {
    constructor(bankName,
        ifsc,
        location,
        interestRate,
        account){
            this.bankName = bankName;
            this.ifsc = ifsc;
            this.location = location;
            this.interestRate = interestRate;
            this.account = account;

    }

}
const sbiBank = new Bank("SBI Bank","SBI00234","Pune",10.45,1234556);
const rbiBank = new Bank ("RBI Bank", "RBI000889","Mumbai", 12.34, 54647483);
console.log(sbiBank);