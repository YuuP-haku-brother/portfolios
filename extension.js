const vscode = require('vscode');

function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.timer', () => {
    const panel = vscode.window.createWebviewPanel(
      'timerPanel',
      'Timer',
      vscode.ViewColumn.Beside,
      {
        enableScripts: true
      }
    );

    panel.webview.html = getWebviewContent();
  });

  context.subscriptions.push(disposable);
}

function getWebviewContent() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="${vscode.Uri.file(context.asAbsolutePath('timer.css'))}">
    </head>
    <body>
      <div id="timer-container">
        <div id="time-display">00:00:00</div>
        <div id="buttons">
          <button onclick="startTimer()">Start</button>
          <button onclick="stopTimer()">Stop</button>
          <button onclick="resetTimer()">Reset</button>
        </div>
        <div id="preset-buttons">
          <button onclick="setTimer(60)">1 min</button>
          <button onclick="setTimer(300)">5 min</button>
          <button onclick="setTimer(600)">10 min</button>
          <button onclick="setTimer(1800)">30 min</button>
          <button onclick="setTimer(3600)">1 hour</button>
          <button onclick="setTimer(7200)">2 hours</button>
        </div>
      </div>
      <script src="${vscode.Uri.file(context.asAbsolutePath('timer.js'))}"></script>
    </body>
    </html>
  `;
}

exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
