import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import { count } from '../count';

export default function Counter() {
  // Declare a new state variable, which we'll call "count"
  const $count = useStore(count);

  return (
    <div className='react-component'>
      <p>You clicked {$count} times</p>
      <button onClick={() => count.set($count + 1)}>
        Click me
      </button>
    </div>
  );
}