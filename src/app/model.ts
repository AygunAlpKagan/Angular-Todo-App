export class Model {
  title;
  items;
  constructor() {
    this.title = 'To Do List App';
    this.items = [
      new TodoItem('Spor yap', false),
      new TodoItem('Kahvaltı yap', true),
      new TodoItem('Faturaları öde', false),
      new TodoItem('Kitap oku', false),
    ];
  }
}

export class TodoItem {
  description;
  action;
  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
