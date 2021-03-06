import { addMessagesActionCreator } from "../../redux/messages-reducer";
import Messages from "./Messages";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapDispatchToProps = (dispatch) => {
  return {
    addMessages: (text) => {
      if (text !== "") {
        dispatch(addMessagesActionCreator(text));
      }
    },
  };
};

let mapStateToProps = (state) => {
  return {
    DialogsData: state.messages.DialogsData,
    MessagesData: state.messages.MessagesData,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);
