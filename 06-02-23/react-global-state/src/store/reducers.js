function titleReducer(state, action) {
  switch (action.type) {
    case "change_title":
      return {
        fancyTitle: {
          title: "Title 2",
        },
      };
    default:
      throw new Error();
  }
}

export { titleReducer };
