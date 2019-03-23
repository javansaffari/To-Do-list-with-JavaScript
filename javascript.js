function submit() {
    // Mohammad Javan Saffari

    var inputData, pTag, taskTag, task, result, removeTag, removeText, removeTask;
    inputData = document.getElementById("input").value;
    if (inputData == "") {
        alert("Empty!")
    } else {
        document.getElementById("input").value = "";
        pTag = document.createElement("p");
        taskTag = document.createElement("span");
        task = document.createTextNode(inputData);
        taskTag.appendChild(task);
        pTag.appendChild(taskTag);
        result = document.getElementById("result");
        result.appendChild(pTag);
        removeTag = document.createElement("span");
        removeText = document.createTextNode(" X");
        removeTag.appendChild(removeText);
        pTag.appendChild(removeTag);
        pTag.addEventListener("click", taskDown);

        // taskDown
        function taskDown() {
            taskTag.style.textDecoration = "line-through";
            taskTag.style.color = "#E91E63";

        };

        removeTask = document.createAttribute("onclick");
        removeTask.value = "this.parentNode.remove();";
        removeTag.setAttributeNode(removeTask);
    }
    ;
};
