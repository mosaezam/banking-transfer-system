function validateTransferAmount(amount) {
    if (amount <= 0) {
        throw new Error("Invalid transfer amount");
    }
}

function calculateTransferFee(amount, destinationCountry) {
    if (destinationCountry === "SG") {
        return amount * 0.02;
    }
    return amount * 0.03;
}

function checkTransactionLimit(amount) {
    if (amount > 50000) {
        throw new Error("Transaction limit exceeded");
    }
}