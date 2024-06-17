$.ajax({
  type: 'GET',
  url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=1',
  dataType: 'json',
  success: function (response, textStatus) {
    console.log(response);
  },
  error: function (request, textStatus, errorMessage) {
    console.log(errorMessage);
  }
});
$(document).ready(function(){
  console.log('dom ready');
  
  $.ajax({
    type: 'GET',
    url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=1',
    dataType: 'json',
    success: function (response, textStatus) {
      console.log(response);
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
});
{ tasks: [{
    id: 175,
    content: 'stuff',
    completed: false,
    due: null,
    created_at: '2018-05-02T02:12:24.942Z',
    updated_at: '2018-05-02T02:12:24.942Z'
  },{
    id: 93,
    content: 'Do Laundry',
    completed: false,
    due: null,
    created_at: '2018-04-05T01:39:58.500Z',
    updated_at: '2018-04-14T14:12:15.817Z'
  },{
    id: 154,
    content: 'Hello',
    completed: false,
    due: null,
    created_at: '2018-04-14T14:44:18.955Z',
    updated_at: '2018-04-14T14:44:18.955Z'
  }]
}
$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=1',
    dataType: 'json',
    success: function (response, textStatus) {
      response.tasks.forEach(function (task) {
        console.log(task.content);
      })
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
});
