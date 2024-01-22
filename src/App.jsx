import { Card } from "./component/atom/card/Card";
import { Header } from "./component/molecules/header/Header";
import "./App.scss";
import { Button } from "./component/atom/button/Button";


export default function App() {

  return (
    <div className={"App"}>
      <div className="main">
        <Header />
        <div className="section-1">
          <Card className="card card1">
            <Button>Click</Button>
          </Card>
          <Card className="card card2">
            <Button>Click</Button>
            <Button>Click</Button>
          </Card>
          <Card className="card card3">
            <Button>Click</Button>
            <Button>Click</Button>
            <Button>Click</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
