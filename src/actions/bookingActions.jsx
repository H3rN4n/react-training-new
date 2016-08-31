import dispatcher from "../dispatcher";

export function createDate(text) {
  dispatcher.dispatch({
    type: "CREATE_DATE",
    text,
  });
}

export function deleteDate(id) {
  dispatcher.dispatch({
    type: "DELETE_DATE",
    id,
  });
}

export function reloadDates() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_DATES"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_DATES", dates: [
      {
        id: 11346461233,
        desc: "Complete Service, Plus Nails",
        userId: 1111,
        providerId: 4444,
        complete: false
      },
      {
        id: 235684679,
        desc: "Complete Service",
        userId: 1122,
        providerId: 4422,
        complete: false
      },
      {
        id: 23568246792,
        desc: "Complete Service",
        userId: 1133,
        providerId: 4422,
        complete: false
      },
      {
        id: 235631846795,
        desc: "Complete Service",
        userId: 1144,
        providerId: 4444,
        complete: false
      },
    ],
    });
  }, 1000);
}
