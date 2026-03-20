window.onload = () => {
  const btnInfo = document.getElementById('btnInfo')

  function sendMessage(action) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action }, () => window.close());
    });
  }

  btnInfo.onclick = () => sendMessage('showInfo')
};