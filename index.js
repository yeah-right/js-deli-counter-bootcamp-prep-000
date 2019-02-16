var katzDeliLine = [];

function takeANumber(customerQueue, customerName) {
  customerQueue.push(customerName);
  
  return "Welcome, " + customerName + ". You are number " + customerQueue.length + " in line.";
}