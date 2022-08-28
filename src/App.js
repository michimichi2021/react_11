import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>第1問</h2>
      <p>Reactを作ったのは次のうちどの企業ですか？</p>
      <button onClick={() => alert("不正解")}>Google</button>
      <button onClick={() => alert("正解")}>Facebook</button>
      <button onClick={() => alert("不正解")}>Apple</button>
      <h2>第2問</h2>
      <p>Reactでは関数コンポーネントではなくクラスコンポーネントを使う</p>
      <button onClick={() => alert("正解")}>正しい</button>
      <button onClick={() => alert("不正解")}>誤り</button>
    </div>
  );
}
