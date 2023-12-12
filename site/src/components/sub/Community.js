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
        if (!window.confirm('해당 게시글을 삭제하겠습니까?')) return;
        setPosts(Posts.filter((_, idx) => idx !== delIndex));
    };
    const enableUpdate = (editIndex) => {
        setPosts(
            Posts.map((post, postIndex) => {
                if (editIndex === postIndex) post.enableUpdate = true;
                return post;
            })
        );
    };
    const disableUpdate = (editIndex) => {
        setPosts(
            Posts.map((post, postIndex) => {
                if (editIndex === postIndex) post.enableUpdate = false;
                return post;
            })
        );
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
                <nav className='btnSet'>
                    <button onClick={resetForm}>cancel</button>
                    <button onClick={createPost}>write</button>
                </nav>
            </div>
            <div className='showBox'>
                {Posts.map((post, idx) => {
                    return (
                        <article key={idx}>
                            {post.enableUpdate ? (
                                //수정모드
                                <>
                                    <div className='txt'>
                                        {/* onChange이벤트로 제어하지 않는 input요소의 value값은 defaultValue속성으로 지정 */}
                                        {/* value: 리액트의 상태값에 관리되는 폼요소, defaultValue: 일반 돔에의해 관리되는 폼요소 */}
                                        <input type='text' defaultValue={post.title} />
                                        <br />
                                        <textarea cols='30' rows='3' defaultValue={post.content}></textarea>
                                    </div>
                                    <nav className='btnSet'>
                                        <button onClick={() => disableUpdate(idx)}>CANCEL</button>
                                        <button>UPDATE</button>
                                    </nav>                                </>
                            ) : (
                                //출력모드
                                <>
                                    <div className='txt'>
                                        <h2>{post.title}</h2>
                                        <p>{post.content}</p>
                                    </div>
                                    <nav className='btnSet'>
                                        <button onClick={() => enableUpdate(idx)}>EDIT</button>
                                        <button onClick={() => deletePost(idx)}>DELETE</button>
                                    </nav>
                                </>
                            )
                            }
                        </article>
                    );
                })}
            </div>
        </Layout >
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