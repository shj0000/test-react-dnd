import React from 'react'
import GridLayout from "react-grid-layout";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Example from './example'

export default class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a">a
          <DndProvider backend={HTML5Backend}>
            <Example />
          </DndProvider>
        </div>
        <div key="b">b
          <DndProvider backend={HTML5Backend}>
            <Example />
          </DndProvider>
        </div>
        <div key="c">c
          <DndProvider backend={HTML5Backend}>
            <Example />
          </DndProvider>
        </div>
      </GridLayout>
    );
  }
}