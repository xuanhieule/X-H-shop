import { PlusOutlined, FilterOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import "antd/dist/antd.css";
import { React, useState } from "react";
import ListChoose from "./components/list_choose";
import { Collapse } from "antd";
import "./style.scss";
function Filter(props) {
  const { name, listChoose } = props;
  const { Panel } = Collapse;
  const [hidden, setHidden] = useState(true);
  const [plus, setPlus] = useState(<PlusOutlined className="choose__icon" />);

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="choose">
      {/* <ListChoose hidden={hidden} listChoose={listChoose} /> */}
      <Panel
        className="choose__filter"
        showArrow={false}
        header={
          <div className="choose__title">
            <span className="choose__name">
              Lọc <FilterOutlined />
            </span>
          </div>
        }
        key="5"
      ></Panel>
      <Collapse onChange={callback}>
        {/* ---------- catelory 1 ----------*/}
        <Panel
          showArrow={false}
          header={
            <div>
              <span className="choose__name">Name1</span>
              {plus}
            </div>
          }
          key="1"
        >
        
          <Collapse defaultActiveKey="1">
            {/* checkbox 1.1 */} 
            <Panel
              showArrow={false}
              header={
                <div>
                  <span className="choose__name">
                    <Checkbox onChange={onChange}>Checkbox1.1</Checkbox>
                  </span>
                  {plus}
                </div>
              }
              key="2"
            >
                {/* checkbox 1.1.1 */} 
              <Panel
                header={
                  <span className="choose__name2">
                    <Checkbox onChange={onChange}>Checkbox1.1.1</Checkbox>
                  </span>
                }
                key="3"
              ></Panel>
              {/* end checkbox 1.1 */} 
            </Panel>
            {/* checkbox 1 */} 
            
            {/* checkbox 1.2 */} 
            <Panel
              showArrow={false}
              header={
                <div>
                  <span className="choose__name">
                    <Checkbox onChange={onChange}>Checkbox1.2</Checkbox>
                  </span>
                  {plus}
                </div>
              }
              key="4"
            >
                {/* checkbox 1.2.1 */} 
              <Panel
                header={
                  <span className="choose__name2">
                    <Checkbox onChange={onChange}>Checkbox1.2.1</Checkbox>
                  </span>
                }
                key="5"
              ></Panel>
              {/* end checkbox 1.2.1 */} 
            </Panel>
            {/* end checkbox 1.2 */} 
          </Collapse>
        </Panel>
        {/*----------  End catelory1 -----------*/}

        {/* ---------- catelory 2 ----------*/}
        <Panel
          showArrow={false}
          header={
            <div>
              <span className="choose__name">Name2</span>
              {plus}
            </div>
          }
          key="6"
        >
        
          <Collapse defaultActiveKey="1">
            {/* checkbox 2.1 */} 
            <Panel
              showArrow={false}
              header={
                <div>
                  <span className="choose__name">
                    <Checkbox onChange={onChange}>Checkbox2.1</Checkbox>
                  </span>
                  {plus}
                </div>
              }
              key="7"
            >
                {/* checkbox 2.1.1 */} 
              <Panel
                header={
                  <span className="choose__name2">
                    <Checkbox onChange={onChange}>Checkbox2.1.1</Checkbox>
                  </span>
                }
                key="8"
              ></Panel>
              {/* end checkbox 2.1.1 */} 
            </Panel>
            {/* end checkbox 2.1 */} 
            
            {/* checkbox 2.2 */} 
            <Panel
              showArrow={false}
              header={
                <div>
                  <span className="choose__name">
                    <Checkbox onChange={onChange}>Checkbox2.2</Checkbox>
                  </span>
                  {plus}
                </div>
              }
              key="9"
            >
                {/* checkbox 2.2.1 */} 
              <Panel
                header={
                  <span className="choose__name2">
                    <Checkbox onChange={onChange}>Checkbox2.2.1</Checkbox>
                  </span>
                }
                key="10"
              ></Panel>
              {/* end checkbox 2.2.1 */} 
            </Panel>
            {/* end checkbox 2.2 */} 
          </Collapse>
        </Panel>
        {/*----------  End catelory2 -----------*/}
      </Collapse>
    </div>
  );
}

Filter.propTypes = {};

export default Filter;
