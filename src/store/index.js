import DataSource from "devextreme/data/data_source";

const store = {
  showPopUp: false,
  showAccount: false,
  authorization: false,
  openState: true,
  user: {},
  historyQueries: new DataSource({
    key: "id",
    load () {
      return fetch('https://636916d028cd16bba714a6fd.mockapi.io/api/v1/reports')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return data
        });
    }
  }),
  selectQuery: [],
};
export default store;
