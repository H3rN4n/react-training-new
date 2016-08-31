import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class BookingStore extends EventEmitter {
  constructor() {
    super()
    this.dates = [
    //   {
    //     id: 113464613,
    //     desc: "Complete Service, Plus Nails",
    //     userId: 1111,
    //     providerId: 4444,
    //     complete: false
    //   },
    //   {
    //     id: 235684679,
    //     desc: "Complete Service",
    //     userId: 1122,
    //     providerId: 4422,
    //     complete: false
    //   }
    ];
  }

  createTodo(desc, userId, providerId) {
    const id = Date.now();

    this.todos.push({
      id,
      desc,
      userId,
      providerId,
      complete: false,
    });

    this.emit("change");
  }

  getAll() {
    return this.dates;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_DATE": {
        this.createTodo(action.desc, action.userId, action.providerId);
        break;
      }
      case "RECEIVE_DATES": {
        console.log(action.dates);
        this.dates = action.dates;
        this.emit("change");
        break;
      }
    }
  }

}

const bookingStore = new BookingStore;
dispatcher.register(bookingStore.handleActions.bind(bookingStore));

export default bookingStore;
