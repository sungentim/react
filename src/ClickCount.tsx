/*
 * @Author: sungen
 * @since: 2024-04-22 09:52:22
 * @desc: 
 * @LastEditTime: 2024-04-22 09:59:40
 * @LastEditors: sungen
 */
import React from "react";
interface ClickCountProps {
  counterCaption: string;
}

interface ClickCountState {
  count: number;
}

class ClickCount extends React.Component<ClickCountProps, ClickCountState> {
  constructor(props: ClickCountProps) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = {
      count: 0,
    };
  }
  render() {
    const style = {
      color: "red",
      margin: "10px",
    }
    return (
      <div>
        <button style={style} onClick={this.onClickButton}>点击我</button>
        <span>{this.props.counterCaption} 点击次数：{this.state.count}</span>
      </div>
    );
  }
  onClickButton() {
    this.setState({
      count: this.state.count + 1,
    });
  }
}

export default ClickCount;
