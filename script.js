

function initPage() {
  var main = document.createElement("MAIN");
  var header = createTextElement("H1", "The questioneble 10 Commans of the mighty Magnus");
  main.appendChild(header);
  main.appendChild(createNumberedList(commands));
  document.body.appendChild(main);
}

function createNumberedList(list) {
  var numList = document.createElement("OL")
  numList.setAttribute("type", "I");
  for (var i = 0; i < list.length; i++) {
    if (list[i] == "") {
      numList.appendChild(createTextElement("LI", "Command not found..."));
    } else {
      numList.appendChild(createTextElement("LI", list[i]));
    }

  }
  return numList;
}

function createTextElement(type, text) {
  var textType = document.createElement(type);
  textType.appendChild(document.createTextNode(text));
  return textType;
}
