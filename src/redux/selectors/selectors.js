export const selectContacts = (state) => {
    return state.phoneBookPage.phoneBookContacts
        .sort((a, b) => (a.userLastName > b.userLastName) ? 1 : -1)};
