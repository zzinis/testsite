import { useRef, useState, useEffect } from 'react';
import Layout from '../common/Layout';

function Community() {
    const input = useRef(null);
    const textarea = useRef(null);
    const [Posts, setPosts] = useState([]);
    const resetForm = () => {
        input.current.value = '';
        textarea.current.value = '';
    };
    const createPost = () => {
        if (!input.current.value.trim() || !textarea.current.value.trim()) {
            resetForm();
            return alert('제목과 본문을 모두 입력하세요.');
        }
        setPosts([{ title: input.current.value, content: textarea.current.value }, ...Posts]);
        resetForm();
    };
    const deletePost = (delIndex) => {
        setPosts(Posts.filter((_, idx) => idx !== delIndex));
    };
    useEffect(() => {
        console.log(Posts);
    }, [Posts]);
    return (
        <Layout name={'Community'}>
            <div className='inputBox'>
                <input type='text' placeholder='제목을 입력하세요.' ref={input} />
                <br />
                <textarea cols='30' rows='3' placeholder='본문을 입력하세요.' ref={textarea}></textarea>
                <br />
                <button>cancel</button>
                <button onClick={createPost}>write</button>
            </div>
            <div className='showBox'>
                {Posts.map((post, idx) => {
                    return (
                        <article key={idx}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            <nav className='btnSet'>
                                <button>EDIT</button>
                                <button onClick={() => deletePost(idx)}>DELETE</button>                            </nav>
                        </article>
                    );
                })}
            </div>
        </Layout>
    );
}

export default Community

/*
Create - 데이터저장 (게시글 저장)
Read - 데이터호출 (게시글 보기)
Upated - 데이터수정 (게시글 수정)
Delete - 데이터삭제 (게시글 삭제)
localStorage: 모든 브라우저마다 가지고 있는 경량의 데이터 베이스 (문자열 저장)
*/