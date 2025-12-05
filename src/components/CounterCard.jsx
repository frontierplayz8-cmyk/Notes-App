import React, { useState } from 'react';

export default function CounterCard() {
    const [num, setNum] = useState(0)
    const IncreaseNum = () => {
        setNum(num+1)
    }
    const DecreaseNum = () => {
        setNum(num-1)
    }
    const ResetNum = () => {
        setNum(0)
    }
  return (
    <div className="counter-card">
      <div className="counter-header">
        <h3 className="counter-title">Counter</h3>
        <p className="counter-sub">Beautiful UI</p>
      </div>

      <div className="counter-body">
        <button onClick={DecreaseNum} className="btn btn-decrease" aria-label="Decrease">
          <svg viewBox="0 0 24 24" className="icon">
            <path d="M5 12h14" />
          </svg>
        </button>

        <div className="display">
          <span className="value">{num}</span>
        </div>

        <button onClick={IncreaseNum} className="btn btn-increase" aria-label="Increase">
          <svg viewBox="0 0 24 24" className="icon">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>

      <div className="counter-footer">
        <div className="quick-actions">
          <button onClick={ResetNum} className="ghost">Reset</button>
          <button onClick={ResetNum} className="ghost">Zero</button>
        </div>
      </div>
    </div>
  );
}