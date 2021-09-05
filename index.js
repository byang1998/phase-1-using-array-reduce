const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function getTotalAmountForProducts(batterybatches) {
let totalBatteries = 0;

for (const batches of batteryBatches) {
    totalBatteries += batches;

};

return totalBatteries;
}

console.log(getTotalAmountForProducts(batteryBatches));