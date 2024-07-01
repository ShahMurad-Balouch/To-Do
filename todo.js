console.log("first")
// Add Button
// let clearbutton = document.getElementById("clear-button");


function addTask(){
    var selectNumber = document.getElementById("select-options");
    var taskContainer = document.getElementById("task-container");
    var inputBox = document.getElementById("input-box");
    if(inputBox.value == ""  || inputBox.value == " "){
        alert("Please write in item field...")
    } 
    else{
        console.log(inputBox.value)
        console.log(selectNumber.value)

        // Create a new div named list-container
var newDiv = document.createElement("div");
newDiv.id = "list-container";


// Check Box
var checkBox = document.createElement("input");
checkBox.type="checkbox";
checkBox.name="checkbox";
checkBox.className = "check-box";


checkBox.onchange= function(){
    var parentDiv = this.parentNode;
    var itemNumber = parentDiv.querySelector(".item-number");
    console.log(itemNumber)
    var itemName = parentDiv.querySelector(".item-name");
    
        var totalItems = taskContainer.querySelectorAll('#list-container').length;
        console.log(totalItems)
        const checkedItems = document.querySelectorAll('#task-container #list-container input[type="checkbox"]:checked').length;
    
        const percentage = (checkedItems / totalItems) * 100;
       
            if (checkBox.checked) {
    
                itemNumber.style.textDecoration = "line-through";
                itemName.style.textDecoration = "line-through";
     
                document.getElementById('count-items').innerText = `total items you have ${totalItems} Checked Items:${checkedItems},(${percentage.toFixed(2)}%)`;
                
        } else {
            itemNumber.style.textDecoration = "none";
            itemName.style.textDecoration = "none";
            document.getElementById('count-items').innerText = `total items you have ${totalItems} Checked Items:${checkedItems},(${percentage.toFixed(2)}%)`;
        }

    
    
}
// itemsNumbers 
const numbers = document.createElement("div")
numbers.innerHTML=selectNumber.value;
numbers.className="item-number"
// ItemName
        const listName = document.createElement("div");
        listName.innerHTML = inputBox.value;
listName.className = "item-name"
        // Remove Button
        const removeBtn = document.createElement("button");
        removeBtn.className="remove"
        removeBtn.innerHTML="X"
        removeBtn.onclick = function(){
            newDiv.remove()
            updateCount()
        }


        // const count = document.getElementById("task-container");
        // console.log(count)
        
        newDiv.appendChild(checkBox);
        newDiv.appendChild(numbers)
        newDiv.appendChild(listName);
        newDiv.appendChild(removeBtn);
        taskContainer.appendChild(newDiv)
        
        // Function to update the count
function updateCount() {
    const listItems = taskContainer.querySelectorAll('#list-container').length;
    const footer = document.getElementById("count-items");

    if(listItems == 0){
 footer.innerText = `Start adding some items to your packing list`
    }
    // console.log(footer)
    else{
        footer.innerText = `You have ${listItems} items in your list`

        console.log(listItems)
    }
}

updateCount()

    }
    // It will remove the text after it is added
    inputBox.value=""
}



// Remove All tasks

function clearAll(){
    const removeTasks = document.getElementById("task-container");
    removeTasks.innerHTML="";
};

// Sorting of tasks
function sortOrder(){
  // Selecting all #list-container elements
  const taskContainer = document.getElementById('task-container');
  const listContainers = taskContainer.querySelectorAll('#list-container');

  // Convert NodeList to array
  const listArray = [...listContainers];

  // Sorting by the item-number value
  listArray.sort((a, b) => {
      const numA = parseInt(a.querySelector('.item-number').textContent.trim());
      const numB = parseInt(b.querySelector('.item-number').textContent.trim());
      var selectElement = document.getElementById('select-order');
    var selectedValue = selectElement.value;
    console.log(selectedValue)
   if(selectedValue == "az"){
       return numA - numB;
   }
   else if(selectedValue == "za"){
    return numB - numA;
   }
  });

  // Clear the container
  taskContainer.innerHTML = '';

  // Re-append the sorted elements
  listArray.forEach(item => {
      taskContainer.appendChild(item);
  });

}

