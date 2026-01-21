import React, { useState, useMemo, useCallback } from 'react';

// 자식 컴포넌트 - React.memo 사용
const Child = React.memo(({ item, onClick }) => {
    console.error(`Rendering Child: ${item.name}`);
    return (
        <li onClick={() => onClick(item.id)}>
            {item.name}
        </li>
    );
});

function UseTest() {
    console.error("UseTest")
    const [items] = useState([
        { id: 1, name: 'Item A', active: true },
        { id: 2, name: 'Item B', active: false },
        { id: 3, name: 'Item C', active: true },
    ]);
    const [count, setCount] = useState(0);

    // useMemo로 active item만 필터링
    const activeItems = useMemo(() => {
        console.error('Filtering active items...');
        return items.filter(item => item.active);
    }, [items]);

    // useCallback으로 클릭 핸들러 메모이제이션
    const handleClick = useCallback((id) => {
        console.error(`Clicked item ${id}`);
    }, []);

    return (
        <div>
            <h1>Active Items</h1>
            <ul>
                {activeItems.map(item => (
                    <Child key={item.id} item={item} onClick={handleClick} />
                ))}
            </ul>
            <button onClick={() => setCount(count + 1)}>
                Rerender Parent ({count})
            </button>
        </div>
    );
}

export default UseTest;
