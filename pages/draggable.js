import React, { useState } from "react";
import Draggable from "react-draggable";

export default function draggable() {
  const [activeDrags, setActiveDrags] = useState(0);
  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0});
  const [controlledPosition, setControlledPosition] = useState({ x: -400, y: 200})
  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };
  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };
  
  const handleDrag = (e, ui) => {
     const {x, y} = deltaPosition;
     setDeltaPosition({
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      })
   };
   
  const onDropAreaMouseEnter = (e) => {
     if (activeDrags) {
       e.target.classList.add('hovered');
     }
   }
   
  const onDropAreaMouseLeave = (e) => {
     e.target.classList.remove('hovered');
   }
   
  const onControlledDrag = (e, position) => {
     const {x, y} = position;
     setControlledPosition({x, y})
   };

  const onControlledDragStop = (e, position) => {
     onControlledDrag(e, position);
     onStop();
   };
  return (
    <>
    <div className='box-container'>
    <p>Active DragHandlers: {activeDrags}</p>
      <Draggable onStart={onStart} onStop = {onStop}>
        <div className="box">I can be dragged anywhere1111</div>
      </Draggable>
      <Draggable axis="x" onStart={onStart} onStop = {onStop}>
          <div className="box cursor-x">I can only be dragged horizonally (x axis)</div>
        </Draggable>
      <Draggable axis="y" onStart={onStart} onStop = {onStop}>
          <div className="box cursor-x">I can only be dragged horizonally (y axis)</div>
        </Draggable>
        
        <Draggable onStart={() => false}>
          <div className="box">I don't want to be dragged</div>
        </Draggable>
        
        <Draggable onDrag={handleDrag} onStart={onStart} onStop = {onStop}>
          <div className="box">
            <div>I track my deltas</div>
            <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
          </div>
        </Draggable>
        
        <Draggable handle="strong"  onStart={onStart} onStop = {onStop}>
          <div className="box no-cursor">
            <strong className="cursor"><div>Drag here</div></strong>
            <div>You must click my handle to drag me</div>
          </div>
        </Draggable>
        
        <Draggable handle="strong">
          <div className="box no-cursor" style={{display: 'flex', flexDirection: 'column', height: 200}}>
            <strong className="cursor"><div>Drag here</div></strong>
            <div style={{overflow: 'scroll'}}>
              <div style={{background: 'yellow', whiteSpace: 'pre-wrap'}}>
                I have long scrollable content with a handle
                {'\n' + Array(40).fill('x').join('\n')}
              </div>
            </div>
          </div>
        </Draggable>

        
        <Draggable bounds={{top: -100, left: -100, right: 100, bottom: 100}}  onStart={onStart} onStop = {onStop}>
          <div className="box">I can only be moved 100px in any direction.</div>
        </Draggable>
        
    </ div>
    
    <div className='box-container'>
        <Draggable onStart={onStart} onStop = {onStop}>
          <div className="box drop-target" onMouseEnter={onDropAreaMouseEnter} onMouseLeave={onDropAreaMouseLeave}>I can detect drops from the next box.</div>
        </Draggable>
        <div className="box" style={{height: '500px', width: '500px', position: 'relative', overflow: 'auto', padding: '0'}}>
          <div style={{height: '1000px', width: '1000px', padding: '10px'}}>
            <Draggable bounds="parent">
              <div className="box">
                I can only be moved within my offsetParent.<br /><br />
                Both parent padding and child margin work properly.
              </div>
            </Draggable>
            <Draggable bounds="parent" >
              <div className="box">
                I also can only be moved within my offsetParent.<br /><br />
                Both parent padding and child margin work properly.
              </div>
            </Draggable>
          </div>
        </div>
        
        <Draggable position={controlledPosition} onDrag={onControlledDrag}>
          <div className="box">
            My position can be changed programmatically. <br />
            I have a drag handler to sync state.
            {/* <div>
              <a href="#" onClick={this.adjustXPos}>Adjust x ({controlledPosition.x})</a>
            </div>
            <div>
              <a href="#" onClick={this.adjustYPos}>Adjust y ({controlledPosition.y})</a>
            </div> */}
          </div>
        </Draggable>
        <Draggable position={controlledPosition} onStop={onControlledDragStop}>
          <div className="box">
            My position can be changed programmatically. <br />
            I have a dragStop handler to sync state.
            {/* <div>
              <a href="#" onClick={this.adjustXPos}>Adjust x ({controlledPosition.x})</a>
            </div>
            <div>
              <a href="#" onClick={this.adjustYPos}>Adjust y ({controlledPosition.y})</a>
            </div> */}
          </div>
        </Draggable>
    </div>
    </>
  );
}
