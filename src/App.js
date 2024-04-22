/*
 * @Author: sungen
 * @since: 2024-04-20 17:39:02
 * @desc: 
 * @LastEditTime: 2024-04-22 10:00:50
 * @LastEditors: sungen
 */
import logo from './logo.svg';
import './App.css';
import ClickCount from './ClickCount.tsx';

function App() {
  return (
    <div className="App">
      <ClickCount counterCaption='第一个按钮'/>
      <ClickCount counterCaption='第二个按钮'/>
      <ClickCount counterCaption='第三个按钮'/>
    </div>
  );
}

export default App;
