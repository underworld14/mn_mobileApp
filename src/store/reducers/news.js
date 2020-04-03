let initialState = {
  isLoading: false,
  isError: false,
  data: [
    {
      title: 'Ramadhan telah tiba !',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQVrVKUa22DGrNuCYzMNa4w-x_GRkKaGiFaWXjOOfL-l9ZNRQx&usqp=CAU',
      content: '',
    },
    {
      title: 'APAAN woirr',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQVrVKUa22DGrNuCYzMNa4w-x_GRkKaGiFaWXjOOfL-l9ZNRQx&usqp=CAU',
      content: '',
    },
    {
      title: 'Diisi aja biar gk kosong',
      image: 'https://i.ytimg.com/vi/yTzEFNhEYLw/maxresdefault.jpg',
      content: '',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case 'LOGIN_PENDING': {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // }

    // case 'REMOVE_PIN':
    //   return {
    //     ...state,
    //     pin: '',
    //   };

    default: {
      return state;
    }
  }
};
