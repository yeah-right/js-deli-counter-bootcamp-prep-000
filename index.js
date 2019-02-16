var katzDeliLine = [];

function takeANumber(customerQueue, customerName) {
  customerQueue.push(customerName);
  
  return "Welcome, " + customerName + ". You are number " + customerQueue.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    for (i = 0; i < katzDeliLine.length; i++) {
      var currentCustomer = katzDeliLine[i];
      katzDeliLine[i]
    }
  }
}