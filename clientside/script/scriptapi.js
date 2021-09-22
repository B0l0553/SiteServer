var cpuBar = document.getElementsByClassName("cpubar");


function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

while(true){
  sleep(100)
  cpuBar.value = GetCPUUsage();
}
