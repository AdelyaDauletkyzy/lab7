function lab7(){
    heading1 = document.createElement("h1");
    heading1.innerText = "Lab7 Assignment";
    document.body.appendChild(heading1);
    heading1.setAttribute("id", "title");
    document.getElementById("title").setAttribute("style", "color: blue;");

    const hrElement = document.createElement('hr');
    document.body.appendChild(hrElement);


    heading2 = document.createElement("h2");
    heading2.innerText = "Task";
    document.body.appendChild(heading2);
    heading2.setAttribute("id", "task");
    document.getElementById("task").setAttribute("style", "color: red;");

    const paragraph1 = document.createElement("p1");
    paragraph1.innerText = "In this task you have to reproduce this HTML page as is using b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
    
    document.body.appendChild(paragraph1);

    const unord = document.createElement("ul");
    const ordli1 = document.createElement("li");
    ordli1.innerHTML = "find elements in the DOM (<b>5 points</b>);";
    ordli1.classList.add("even");
    unord.appendChild(ordli1);

    var ordli2 = document.createElement("li");
    ordli2.innerHTML = "create/add/remove elements (<b>5 points</b>);";
    ordli2.classList.add("odd");
    unord.appendChild(ordli2);

    var ordli3 = document.createElement("li");
    ordli3.innerHTML = "change content of the elements (<b>5 points</b>);";
    ordli3.classList.add("even");
    unord.appendChild(ordli3);

    var ordli4 = document.createElement("li");
    ordli4.innerHTML = "change styles of the elements (<b>5 points</b>);";
    ordli4.classList.add("odd");
    unord.appendChild(ordli4);
    var ordli5 = document.createElement("li");
    ordli5.innerHTML = "change attributes of the elements (<b>5 points</b>);";
    ordli5.classList.add("even");
    unord.appendChild(ordli5);
    var ordli6 = document.createElement("li");
    ordli6.innerHTML = "change classes of the elements (<b>5 points</b>);";
    ordli6.classList.add("odd");
    unord.appendChild(ordli6);

    document.body.appendChild(unord);

    const style = document.createElement("style");
    style.innerHTML = '.even {color: green;}.odd {color: purple;}';
    document.body.appendChild(style);

    const hrElement1 = document.createElement('hr');
    document.body.appendChild(hrElement1);

    heading3 = document.createElement("h2");
    heading3.innerText = "Submission";
    document.body.appendChild(heading3);
    heading3.setAttribute("id", "submission");
    document.getElementById("submission").setAttribute("style", "color: red;");

    const paragraph2 = document.createElement("p1");
    paragraph2.innerText = "To submit your work, follow these instructions:"
    document.body.appendChild(paragraph2);
///
    const unord2 = document.createElement("ul");
    const ordlist = document.createElement("li");
    ordlist.innerHTML = "Create a new repository on Github, named <b>lab7 (1 point).</b>";
    ordlist.classList.add("even");
    unord2.appendChild(ordlist);

    var ordlist1 = document.createElement("li");
    ordlist1.innerHTML = "Clone this repository to your local machine and work inside it.";
    ordlist1.classList.add("odd");
    unord2.appendChild(ordlist1);

    var ordlist3 = document.createElement("li");
    ordlist3.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one '&lt;h1&gt;' tag with 'Hello, World!' message <b>lab7 (1 point).</b>";
    ordlist3.classList.add("even");
    unord2.appendChild(ordlist3);

    var ordli4 = document.createElement("li");
    ordli4.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)";
    ordli4.classList.add("odd");
    unord2.appendChild(ordli4);
    var ordli5 = document.createElement("li");
    ordli5.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).";
    ordli5.classList.add("even");
    unord2.appendChild(ordli5);
    var ordli6 = document.createElement("li");
    ordli6.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";
    ordli6.classList.add("odd");
    unord2.appendChild(ordli6);
    var ordli7 = document.createElement("li");
    ordli7.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>).";
    ordli7.classList.add("odd");
    unord2.appendChild(ordli7);

    document.body.appendChild(unord2);

    const hrElement2 = document.createElement('hr');
    document.body.appendChild(hrElement2);

    h1 = document.querySelector("h1");
    h1.innerHTML = "";
} 
