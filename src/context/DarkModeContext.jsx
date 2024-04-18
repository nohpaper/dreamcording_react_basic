import {createContext, useState } from "react";
//우산을 쓴 컴포넌트 하위에 있는 모든 자식요소들이 우산에 있는 데이터에 접근 가능
// 우산, context를 만들려면 react에서 제공해주는 createContext() 이용해서 만듬
//그리고 컴포넌트를 만들어서 자식 컴포넌트를 받아오는 컴포넌트를 만들어서
//자식 컴포넌트들을 위에서 만든 context로 만든 provider로 감싸면 되고
//자식 컴포넌트와 공유하고 싶은 데이터가 있다면 value에 지정해주면 된다
//그래서 현재 darkmode, toggleDarkMode 상태 확인을 해주기 위해 value에 적용함


//데이터를 context에 담고 있다고 생각
export const DarkModeContext = createContext();

//context 만드려면 항상 provider도 생성해야함.
//provider는 context 데이터를 잘 가지고 보여주고 있는 우산을 만든다고 생각

//내부적으로 context에 있는 Provider를 쓰는데 이걸 외부에서 편하게 쓰기 위해 우리가 우산을 만드는것
export function DarkModeProvider({ children }) {
    const [ darkMode, setDarkMode ] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) =>!mode);
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            { children }
        </DarkModeContext.Provider>
    )
}