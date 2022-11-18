import React from 'react'
import GridLayout from "react-grid-layout";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Example from './example'

import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);


export default class MyFirstGrid extends React.Component {  
  render() {
    const CustomGridItemComponent = React.forwardRef(({style, className, onMouseDown, onMouseUp, onTouchEnd, ...props}, ref) => {
      return (
        <div style={{ ...style}} className={className} ref={ref} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onTouchEnd={onTouchEnd}>
          {/* Some other content */}
          test
        </div>
      );
    })

  
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 5, h: 1},
      { i: "b", x: 1, y: 0, w: 5, h: 1},
      { i: "c", x: 4, y: 0, w: 5, h: 1}
    ];


    return (
      <ResponsiveGridLayout
        className="layout"
        layout={layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <CustomGridItemComponent key="a">
          aaaass

        </CustomGridItemComponent>
        {/* <div key="a">a
        </div> */}
        <div key="b">b
        </div>
        <div key="c">c
          {/* <DndProvider backend={HTML5Backend}>
            <Example />
          </DndProvider> */}
        </div>
      </ResponsiveGridLayout>
    );
  }
}