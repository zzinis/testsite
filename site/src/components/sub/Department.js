import React from 'react'
import { useDepartmentQuery } from '../../hooks/useDepartmentQuery';


import Layout from '../common/Layout';

function Department() {
    const { data: Members, isSuccess } = useDepartmentQuery();

    return (
        // props으로 자식요소에 줄바꿈될 텍스트를 전달하고 싶을떄
        //줄바꿀될 부분에 구분자가 될 문자값을 넣어서 전달
        <Layout name={'Department'} txt={'Hello-World'} bg={'Department.jpg'}>
            {isSuccess &&
                Members.map((member, idx) => {
                    return (
                        <article key={idx}>
                            <div className='pic'>
                                <img src={`${process.env.PUBLIC_URL}/img/${member.pic}`} alt={member.name} />
                                <img src={`${process.env.PUBLIC_URL}/img/${member.pic}`} alt={member.name} />
                            </div>
                            <h2>{member.name}</h2>
                            <p>{member.position}</p>
                        </article>
                    );
                })}
        </Layout>
    );
}


export default Department
