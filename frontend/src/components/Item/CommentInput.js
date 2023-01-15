import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { ADD_COMMENT } from "../../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (payload) => dispatch({ type: ADD_COMMENT, payload }),
});

const CommentInput = (props) => {

  const {slug, onSubmit, currentUser} = props;
  const [body, setBody] = useState("");

  const setInputBody = (ev) => {

    setBody(ev.target.value);
  };
  
  const createComment = (ev) => {

    ev.preventDefault();

    agent.Comments.create(slug, {

      body : body,

    }).then((payload) => {

      onSubmit(payload);

    });

    setBody("");

  };

  
  return (
    <form className="card comment-form m-2" onSubmit={createComment}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          value={body}
          onChange={setInputBody}
          rows="3"
        ></textarea>
      </div>
      <div className="card-footer">
        <img
          src={currentUser.image}
          className="user-pic mr-2"
          alt={currentUser.username}
        />
        <button className="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );

}

export default connect(() => ({}), mapDispatchToProps)(CommentInput);
