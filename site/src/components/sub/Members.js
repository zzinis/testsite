import React from 'react'
import Layout from '../common/Layout';

function Members() {
    return (
        <Layout name={'Member'}>
            <form>
                <fieldset>
                    <legend>회원가입 폼 양식</legend>
                    <table border='1'>
                        <tr>
                            {/* user id */}
                            <th scope='row'>
                                <label htmlFor='userid'>USER ID</label>
                            </th>
                            <td>
                                <input type='text' name='userid' id='userid' placeholder='아이디를 입력하세요' />
                            </td>
                        </tr>
                        {/* password */}
                        <tr>
                            <th>
                                <label htmlFor='pwd1'>PASSWORD</label>
                            </th>
                            <td>
                                <input type='password' name='pwd1' id='pwd1' placeholder='비밀번호를 입력하세요' />
                            </td>
                        </tr>
                        {/* re password */}
                        <tr>
                            <th>
                                <label htmlFor='pwd2'>RE-PASSWORD</label>
                            </th>
                            <td>
                                <input type='password' name='pwd2' id='pwd2' placeholder='비밀번호를 재입력하세요' />
                            </td>
                        </tr>
                        {/* e mail */}
                        <tr>
                            <th>
                                <label htmlFor='email'>E-MAIL</label>
                            </th>
                            <td>
                                <input type='text' name='email' id='email' placeholder='이메일주소를 입력하세요' />
                            </td>
                        </tr>
                        {/* btn set */}
                        <tr>
                            <th colspan='2'>
                                <input type='reset' value='CANCEL' />
                                <input type='submit' value='SEND' />
                            </th>
                        </tr>
                    </table>
                </fieldset>
            </form>
        </Layout>
    );
}

export default Members
