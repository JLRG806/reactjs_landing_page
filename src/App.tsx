import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <table className="border-collapse border border-slate-500 ...">
          <thead>
            <tr>
              <th className="border border-slate-600 ...">State</th>
              <th className="border border-slate-600 ...">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 ...">Indiana</td>
              <td className="border border-slate-700 ...">Indianapolis</td>
            </tr>
            <tr>
              <td className="border border-slate-700 ...">Ohio</td>
              <td className="border border-slate-700 ...">Columbus</td>
            </tr>
            <tr>
              <td className="border border-slate-700 ...">Michigan</td>
              <td className="border border-slate-700 ...">Detroit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
