import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import moment from "moment";
import { config } from "../../shared/config";

// 액션
const SET_COMMENT = "SET_COMMENT"; // 댓글 불러오기
const ADD_COMMENT = "ADD_COMMENT"; // 댓글 추가
const DELETE_COMMENT = "DELETE_COMMENT"; // 댓글 삭제

// 액션 생성함수
const setComment = createAction(SET_COMMENT, (list) => ({ list }));
const addComment = createAction(ADD_COMMENT, (post) => ({ post }));
const deleteComment = createAction(DELETE_COMMENT, () => ({}));

// Initial State
const InitialState = {
  list: [],
};

// Mock-API : https://607541d80baf7c0017fa5966.mockapi.io/post

// DB에 댓글 추가
const addCommentDB = (user_name, comment, post_id) => {
  return function (dispatch, getState, { history }) {
    const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");

    axios({
      method: "post",
      url: `${config.api}/comment/${post_id}`,
      data: { content: comment },
    }).then((res) => {
      console.log(res);
      const new_comment_post = {
        user: res.data.comment.user,
        content: res.data.comment.content,
        createdAt: res.data.comment.createdAt,
        comment_id: moment(),
      };
      console.log(new_comment_post);
      dispatch(addComment(new_comment_post));
    });
  };
};

// DB 댓글정보 삭제
// 현재 로그인유저 정보와 댓글 작성자 정보 비교 후 같으면 삭제
const deleteCommentDB = (comment_id) => {
  console.log("넘어왔다");
  axios({
    method: "delete",
    url: `${config.api}/comment/${comment_id}`,
  }).then((res) => {
    console.log(res.data.result);
    console.log("통신했다.");
  });
};

// 댓글 가져오기(필요없을듯 함)
const getCommentDB = (post_id) => {
  return function (dispatch, getState, { history }) {
    let list = [];
    axios({
      method: "get",
      url: `${config.api}/post/detail/${post_id}`,
    }).then((docs) => {
      if (!docs.data.comment) {
        return;
      }
      console.log(docs.data);

      // const post_idx = docs.data.findIndex((p) => p.id === post_id);
      // console.log(docs.data[post_idx].comment);
      // list = docs.data[post_idx].comment;
      // dispatch(setComment(list));
    });
  };
};

// 리듀서
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        draft.list = action.payload.list;
      }),

    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.post);
        const new_comment = action.payload.post;
        draft.list.unshift(new_comment);
      }),

    [DELETE_COMMENT]: (state, action) => produce(state, (draft) => {}),
  },
  InitialState
);

const actionCreators = {
  setComment,
  addComment,
  deleteComment,
  deleteCommentDB,
  getCommentDB,
  addCommentDB,
};

export { actionCreators };
