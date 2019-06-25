import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = props => {
  let { dispatch, onClick, active } = props;
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: true
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    onClick: () => {
      console.log("mapDispatchToProps, onClick");
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
