import { Route, Switch } from 'react-router-dom';

//common
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Menu from './components/common/Menu';


//main
import Visual from './components/main/Visual';
import Main from './components/main/Main';

//sub
import Community from './components/sub/Community';
import Contact from './components/sub/Contact';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Member from './components/sub/Member';
import Youtube from './components/sub/Youtube';

import './scss/style.scss';
// import { fetchDepartment } from './redux/departmentSlice';
// import { fetchFlickr } from './redux/flickrSlice';
// import { fetchYoutube } from './redux/youtubeSlice';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';


//Menu컴포넌를 App에서 호출한뒤 토글 객체를 각각 메인, 서브 헤더로 전달해서 토글 메뉴 기능이 동작하도록 수정
/*
  redux-toolkit의 작업흐름
  1.redux 폴더안쪽에 작업하려는 data의 slice 파일 생성 (data fetching후 액션객체 생성함수, 액션객체받아서 전역데이터 수정함수)
  2.index.js에서 slice값으로 연동된 데이터 store에 저장하고 App에 전달
  3.app.js에서 slice파일로부터 action객체 생성함수를 import후 호출하여 action만들고 dispatch로 전달
  4.원하는 컴포넌트에서 useSelector로 데이터 가져오기
*/

function App() {
  const queryClient = new QueryClient();
  console.log('rendered!!');
  const [Count, setCount] = useState(0);
  const [Count2, setCount2] = useState(0);

  const returnPromise = () => {
    return new Promise((res) => setTimeout(res, 500));
  };

  const handleClick = () => {
    returnPromise().then(() => {
      setCount(Count + 1);
      setCount2(Count2 + 2);
    });
  };
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(fetchYoutube());
  //   dispatch(fetchDepartment());


  // }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ position: 'fixed', zIndex: 10 }}>
        <button onClick={handleClick}>button</button>
        <h1 style={{ color: '#fff' }}>
          {Count} - {Count2}
        </h1>
      </div>
      <Switch>
        <Route exact path='/' render={() => <Main />} />
        <Route path='/' render={() => <Header type={'sub'} />} />
      </Switch>

      <Route path='/department' component={Department} />
      <Route path='/community' component={Community} />
      <Route path='/gallery' component={Gallery} />
      <Route path='/youtube' component={Youtube} />
      <Route path='/contact' component={Contact} />
      <Route path='/member' component={Member} />

      <Footer />
      <Menu />
      <ReactQueryDevtools />
    </QueryClientProvider>);
}

export default App;

/*
  Automatic Batching 
  :여려개의 state값이 하나의 핸들러 함수 안쪽에서 동시에 변경이 될때 그룹으로 묶어서 한번만 렌더링 처리
  :17에도 동작되는 기능이긴 하나 promise를 반환하는 함수 안쪽에 여러개의 state값이 변경될 경우에는 동작안됨
*/