import { forwardRef, useState, useImperativeHandle } from 'react';

const Modal = forwardRef((props, ref) => {
    const [Open, setOpen] = useState(false);
    useImperativeHandle(ref, () => {
        return { open: () => setOpen(true) };
    });
    return (
        <>
            {Open && (
                <aside className='modal' ref={ref}>
                    <div className='con'></div>
                    <span className='close' onClick={() => setOpen(false)}>
                        close
                    </span>
                </aside>
            )}
        </>
    );
});
export default Modal;

/*
  useRef로 참조객체 연결은 JSX는 가능하다 사용자가 직접 만든 컴포넌트는 불가
  - 해결 방법은 참조하려고 하는 컴포넌트 내부에서 forwardRef를 이용하여 
  - 자기 자신을 참조객체에 연결해서 부모에게 역으로 전달처리
  forwardRef
  - 자식 컴포넌트 요소를 호출하는 부모컴포넌트에 역으로 참조해서 전달
    useImperativeHandle
  - 자식 컴포넌트가 아닌 특정 커스텀 객체를 부모로 전달
  - forwardRef안쪽에서만 활용가능
*/