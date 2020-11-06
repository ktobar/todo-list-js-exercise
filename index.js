// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // const title = taskTitles[taskIndex];
    // const complete = taskComplete[taskIndex];
    logState: ()=> {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: ()=> {
      this.complete = true;
    }
  };
  return task;
  // taskTitles.push(title);
  // taskDescriptions.push(description)
  // taskComplete.push(false);
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// Print the state of a task to the console in a nice readable way

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// task1.logState();
// task1.markCompleted();
// task1.logState();


console.log('---------');

task1.title
task1.markCompleted();
// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed

// for now, let's just make sure we see our tasks
console.log(tasks);
