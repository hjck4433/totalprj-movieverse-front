import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./util/GlobalStyle";
import UserStore from "./context/UserStore";
import Header from "./pages/Header";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Join from "./pages/Join";
import MyPage from "./pages/MyPage";
import MemberInfoChg from "./pages/MemberInfoChg";
import MemberPost from "./pages/MemberPost";
import MovieSearch from "./pages/MovieSearch";
import MovieInfo from "./pages/MovieInfo";
import Board from "./pages/Board";
import NewPost from "./pages/NewPost";
import Post from "./pages/Post";
import ChatList from "./pages/ChatList";
import Chat from "./pages/Chat";
import Payment from "./pages/Payment";
import PaymentRst from "./pages/PaymentRst";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserStore>
        <Router>
          <Routes>
            <Route element={<Header />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/join" element={<Join />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/mypage/infochange" element={<MemberInfoChg />} />
              <Route path="/mypage/memberpost" element={<MemberPost />} />
              <Route path="/moviesearch" element={<MovieSearch />} />
              <Route path="/moviesearch/:id" element={<MovieInfo />} />
              <Route path="/board" element={<Board />} />
              <Route path="/board/new" element={<NewPost />} />
              <Route path="/board/:id" element={<Post />} />
              <Route path="/kikilist" element={<ChatList />} />
              <Route path="/kikilist/:id" element={<Chat />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/payment/result" element={<PaymentRst />} />
            </Route>
          </Routes>
        </Router>
      </UserStore>
    </>
  );
}

export default App;
