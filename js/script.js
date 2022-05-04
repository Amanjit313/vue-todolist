/* 

**MILESTONE 1**

Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.

**MILESTONE 2**

Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

**MILESTONE 3**

Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

*/

const app = new Vue({

  el: "#app",

  data:{

    todos:[

      {
        task: "Fare la spesa",
        done: false
      },

      {
        task: "Fare i compiti",
        done: false
      },

      {
        task: "Fare una passeggiata",
        done: false
      }

    ]

  },

  methods:{

    // Condizione true false per mettere la classe barrata
    addClassThrough(index){
      if(!this.todos[index].done){
        this.todos[index].done = true
      } else if(this.todos[index].done){
        this.todos[index].done = false
      }
    },

    // Funzione per eliminare un todos
    removeToDo(index){
      if(confirm(`Sei sicuro di voler eliminare la task: ${this.todos[index].task}?`)){
        this.todos.splice(index, 1);
      }
    }

  }

})