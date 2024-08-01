"use client"
import { list } from 'postcss'
import React, { useState } from 'react'

const page = () => {

  const [titel, settitel] = useState("")
  const [details, setdetails] = useState("")

  const [mainTask, setmainTask] = useState([])
  const submitHandel = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { titel, details }]);
    // console.log(mainTask);
    settitel("");
    setdetails("");
  };


  const removeTask = (i) =>{
    let copyTask = [...mainTask];
    copyTask.splice(i,1);
    setmainTask(copyTask);
  };

  let randorTask = <h2 className='text-white'>Task Not Available</h2>;
  if (mainTask.length > 0) {
    randorTask = mainTask.map((t, i) => {
      return (
        <>
          <div className='flex justify-between m-4 text-white'>
            <div key={i}>
            <h3 className='font-bold text-xl'>{t.titel}</h3>
            <h5 className='text-xl'>{t.details}</h5>
            </div>
            <button className='text-red-500 bg-black font-bold px-5 py-2 rounded border border-black'
            onClick={()=>{
              removeTask(i);
            }}>Delete</button>
          </div>
          <hr className='m-2 bg-white' />
        </>

      )
    });
  }

  return (
    <>
      <h1 className='bg-black text-green-500 font-bold p-5 text-center text-5xl'>My Todo-List</h1>

      <form onSubmit={submitHandel}>
        <input type='text' className='bg-zinc-800 text-xl text-white rounded px-5 py-3 m-5 placeholder:text-white'
          placeholder='Enter Task' value={titel}
          onChange={(e) => {
            settitel(e.target.value);
          }}></input>

        <input type='text' className='bg-zinc-800 text-xl text-white rounded px-5 py-3 m-5 placeholder:text-white'
          placeholder='Enter Details' value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}></input>

        <button className='bg-black text-white px-5 py-3 m-5 text-xl rounded'>Add Task</button>
      </form>
      <hr></hr>
      <div className='bg-slate-500 text-black px-5 py-3 rounded m-5 '>{randorTask}</div>
    </>
  )
}

export default page