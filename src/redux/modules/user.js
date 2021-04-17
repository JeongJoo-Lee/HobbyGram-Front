import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { config } from "../../shared/config";
import axios from "axios";
import { setCookie, deleteCookie, getCookie } from "../../shared/Cookie";
import { history } from "../configureStore";

// 액션 타입
const LOG_OUT = "LOG_OUT"; // 로그아웃
const GET_USER = "GET_USER"; //회원정보 조회
const SET_USER = "SET_USER"; // 로그인
// 액션 생성함수
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

//  초기값
// is_login : 로그인 상태인지 아닌지 여부 확인
const initialState = {
  user: null,
  is_login: false,
};

// 회원가입
const signUpDB = (email, nickname, pwd, pwdcheck) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: `${config.api}/join`,
      data: {
        email: email,
        name: nickname,
        password: pwd,
        password2: pwdcheck,
      },
    })
      .then(() => {
        history.push("/login");
      })
      .catch((err) => {
        console.log("회원가입 에러", err);
      });
  };
};

// 로그인
const LoginDB = (email, pwd) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: `${config.api}/login`,
      data: {
        email: email,
        password: pwd,
      },
    }).then((res) => {
      console.log(res.data);
      const jwtToken = res.data.result.user.token;
      // 서버로 부터 받은 토큰을 쿠키에 저장
      setCookie("is_login", jwtToken);
      // 통신 시 헤더에 default 값으로 저장
      axios.defaults.headers.common["Authorization"] = `${jwtToken}`;
      const user = {
        email: email,
        name: res.data.result.user.name,
      };
      dispatch(setUser(user));
    });
  };
};

// 리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        // 로그인시 받은 회원 정보
        console.log(action.payload);
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  logOut,
  setUser,
  LoginDB,
  signUpDB,
};

export { actionCreators };
