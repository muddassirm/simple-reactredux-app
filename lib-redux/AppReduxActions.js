const AppReduxActions = {
   submitArticle(data) {
        return({
            actionType: 'SUBMIT_ARTICLE',
            value: data
        });
    },
    approveArticle(data)
    {
        return({
            actionType: 'APPROVE_ARTICLE',
            value: data
        });
    },
    removeArticle(key)
    {
         return({
            actionType: 'REMOVE_ARTICLE',
            value: key
        });
    }
};
export default AppReduxActions;