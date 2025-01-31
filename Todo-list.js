let values = JSON.parse(localStorage.getItem("todos")) || [];
      renderTodoList();
      function renderTodoList() {
        let todoList = '';
        values.forEach((todoObject,index) =>{
          const { todoValue, todoDate } = todoObject;
          if(!todoValue){
            return;
          }
          const html = `
            <div class="todo-para">${todoValue}</div>
            <div>${todoDate}</div>
            <button class="remove-button js-remove-button">Remove</button>
          `;
          todoList +=  html;
        });
        document.querySelector('.todo-list-container').innerHTML = todoList;
        document.querySelectorAll('.js-remove-button')
          .forEach((deletebutton,index) =>{
            deletebutton.addEventListener('click',() =>{
              values.splice(index,1)
              localStorage.setItem("todos",JSON.stringify(values));
              renderTodoList()
            });
          });
      }
      function TakeInputData(){
        let Value = document.querySelector('.input-bar');
        let todoValue = Value.value.trim();
        let date = document.querySelector('.date-bar');
        let todoDate = date.value;
        if( todoValue === '' || todoDate === ''){
          alert("Enter valid input");
          return;
        }
        else{
          values.push({
          todoValue:todoValue,
          todoDate:todoDate
        });
          localStorage.setItem("todos",JSON.stringify(values));
          Value.value = '';
          date.value = '';
          renderTodoList();
        }
      }
      document.querySelector('.js-add-todo-button').addEventListener('click',() =>{
        TakeInputData();
      });