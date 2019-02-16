var katzDeliLine = [];

function takeANumber(customerQueue, customerName) {
  customerQueue.push(customerName);
  
  return "Welcome, " + customerName + ". You are number " + customerQueue.length + " in line.";
}

function nowServing(katzDeliLine) {
  // for (let i = 0; i < katzDeliLine.length; i++) {
  //   if (katzDeliLine.length === 0) {
  //     return "There is nobody waiting to be served!";
  //   } else {
  //     return katzDeliLine[i];
  //     katzDeliLine.shift();
  //     //use .shift()
  //   }
  //}
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      return "Currently serving " + katzDeliLine[i] + ".";
      katzDeliLine.shift();
    }
  }

}

