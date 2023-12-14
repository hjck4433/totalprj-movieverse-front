import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./util/GlobalStyle";
import UserStore from "./context/UserStore";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Kakao from "./pages/Kakao";
import Join from "./pages/Join";
import MyPage from "./pages/MyPage";
import MemberInfoChg from "./pages/MemberInfoChg";
import MemberPost from "./pages/MemberPost";
import MovieSearch from "./pages/MovieSearch";
import MovieInfo from "./pages/MovieInfo";
import Board from "./pages/Board";
import NewPost from "./pages/NewPost";
import Post from "./pages/Post";
import PostRevise from "./pages/PostRevise";
import ChatList from "./pages/ChatList";
import Chat from "./pages/Chat";
import Payment from "./pages/Payment";
import PaymentRst from "./pages/PaymentRst";
import UtilTest from "./pages/UtilTest";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserStore>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/oauth/kakao/callback" element={<Kakao />} />
              <Route path="/join" element={<Join />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/mypage/infochange" element={<MemberInfoChg />} />
              <Route path="/mypage/memberpost" element={<MemberPost />} />
              <Route path="/moviesearch" element={<MovieSearch />} />
              <Route path="/moviesearch/:id" element={<MovieInfo />} />
              <Route path="/board/:id" element={<Board />} />
              <Route path="/board/new" element={<NewPost />} />
              <Route path="/board/post/:id" element={<Post />} />
              <Route path="/board/revise/:id" element={<PostRevise />} />
              <Route path="/kikilist" element={<ChatList />} />
              <Route path="/kikilist/:roomId" element={<Chat />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/payment/result" element={<PaymentRst />} />
              <Route path="/utiltest" element={<UtilTest />}></Route>
            </Route>
          </Routes>
        </Router>
      </UserStore>
    </>
  );
}

export default App;
