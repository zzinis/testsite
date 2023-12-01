import Layout from '../common/Layout';
import { useState, useEffect } from 'react';

function Members() {
    const initVal = {
        userid: '',
        pwd1: '',
        pwd2: '',
        email: '',
    };
    const [Val, setVal] = useState(initVal);
    const handleChange = (e) => {
        //현재 입력하고 있는 input요소의 name,value값을 비구조화할당으로 뽑아서 출력
        const { name, value } = e.target;
        //기존 초기 Val State값을 deep copy해서 현재 입력하고 있는 항목의 name값과 value값으로 기존 State를 덮어쓰기 해서 변경 (불변성 유지)
        setVal({ ...Val, [name]: value });
    };
    useEffect(() => {
        console.log(Val);
    }, [Val]);
    return (
        <Layout name={'Member'}>
            <form>
                <fieldset>
                    <legend className='h'>회원가입 폼 양식</legend>
                    <table>
                        <tbody>
                            {/* user id */}
                            <tr>
                                <th scope='row'>
                                    <label htmlFor='userid'>USER ID</label>
                                </th>
                                <td>
                                    <input
                                        type='text'
                                        name='userid'
                                        id='userid'
                                        placeholder='아이디를 입력하세요'
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            {/* password */}
                            <tr>
                                <th>
                                    <label htmlFor='pwd1'>PASSWORD</label>
                                </th>
                                <td>
                                    <input
                                        type='password'
                                        name='pwd1'
                                        id='pwd1'
                                        placeholder='비밀번호를 입력하세요'
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            {/* re password */}
                            <tr>
                                <th>
                                    <label htmlFor='pwd2'>RE-PASSWORD</label>
                                </th>
                                <td>
                                    <input
                                        type='password'
                                        name='pwd2'
                                        id='pwd2'
                                        placeholder='비밀번호를 재입력하세요'
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>

                            {/* e mail */}
                            <tr>
                                <th>
                                    <label htmlFor='email'>E-MAIL</label>
                                </th>
                                <td>
                                    <input
                                        type='text'
                                        name='email'
                                        id='email'
                                        placeholder='이메일주소를 입력하세요'
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            {/* btn set */}
                            <tr>
                                <th colSpan='2'>
                                    <input type='reset' value='CANCEL' />
                                    <input type='submit' value='SEND' />
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
            </form>
        </Layout>
    );
}

export default Members
