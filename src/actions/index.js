export function foodItems() {
  return {
    type: "FOOD_ITEMS", //action type: used to trigger the action
    payload: [
      {
        //application data to be displayed in response to the action
        id: 1,
        name: "Donuts",
        img:
          "https://images.unsplash.com/photo-1583096114844-06ce5a5f2171?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9udXRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        name: "Ice-cream",
        img:
          "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTZ8fGljZWNyZWFtc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        name: "Chocolates",
        img:
          "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGNob2NvbGF0ZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      },
    ],
  };
}
