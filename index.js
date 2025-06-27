const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce to calculate the total
const totalBatteries = batteryBatches.reduce((total, batch) => {
  return total + batch;
}, 0);
