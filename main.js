const mainTitle = document.querySelector("h1");
const codeRunner = document.getElementById("run");
const codeEditor = document.getElementById("editor");
const successOutput = document.getElementById("output");
const errorOutput = document.getElementById("error");

const originalConsoleLog = console.log;

console.log = function (message) {
  successOutput.innerText += message + "\n";
  originalConsoleLog(message);
};

function clearOutputs() {
  successOutput.innerText = "";
  errorOutput.innerText = "";
}

codeRunner.addEventListener("click", () => {
  let enteredCode = codeEditor.innerText.trim();
  clearOutputs();

  if (!enteredCode) {
    errorOutput.innerText = "Are you kidding me? Enter some JS already!";
    return null;
  }

  try {
    eval(enteredCode);
    errorOutput.innerText = "";
  } catch (error) {
    successOutput.innerText = "";
    errorOutput.innerText = `Oops! Its seems like :( \n ${error}`;
  }
});

// -- ** -- //

mainTitle.addEventListener("click", () => {
  const specialMessageToMicrosoftTeam = document.createElement("span");

  specialMessageToMicrosoftTeam.innerText =
    "Microsoft you better hire me ASAP! Or I will create a competitor to VS Code! ;)";

  document.body.appendChild(specialMessageToMicrosoftTeam);
});
