let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let values = document.getElementById("item");
    let input = values.value;

    if(input === ""){
        alert("Enter a task");
    }
    if(input !== ""){
        let lists = document.getElementById("list");
        let li = document.createElement("li");
        li.textContent = input;
        lists.appendChild(li);
        values.value = "";


        let btnForDeleting = document.createElement("button-delete");
        btnForDeleting.textContent = "delete";
        btnForDeleting.classList.add("delete-styles");
        // btnForDeleting.style.cssText = "border-radius:5px; color: white; background-color: rgb(6, 240, 45); padding: 5px; margin-left: 60px; justify-content:space-between;";
        li.appendChild(btnForDeleting);

        btnForDeleting.addEventListener("click", function(){
            li.remove();
        })

    
        let btn2 = document.createElement("button-edit");
        btn2.textContent = "Edit";
        btn2.style.cssText = "border-radius:5px; color: black; background-color: rgb(10, 204, 10); padding: 5px; margin-left: 5px;";
        li.appendChild(btn2);
        btn2.addEventListener("click", function(){
            let edit = prompt("Edit your task");
            li.textContent = edit;
            
        })


        
    }

    
})

