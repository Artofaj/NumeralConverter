import React, { useState } from "react"

const CheatSheet = () => {
  const [cheatsheet, showCheatsheet] = useState(false)

  return (
    <section id="cheatsheet">
      {cheatsheet && (
        <>
          <h1>Cheatsheet</h1>
          <div style={{ overflow: "auto" }}>
            <table>
              <tbody>
                <tr>
                  <th>Symbol</th>
                  <td>I</td>
                  <td>V</td>
                  <td>X</td>
                  <td>L</td>
                  <td>C</td>
                  <td>D</td>
                  <td>M</td>
                </tr>
                <tr>
                  <th>Value</th>
                  <td>1</td>
                  <td>5</td>
                  <td>10</td>
                  <td>50</td>
                  <td>100</td>
                  <td>500</td>
                  <td>1000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
      <button style={{float:"right"}} onClick={() => showCheatsheet(!cheatsheet)}>
        {cheatsheet ? "hide" : "show"} cheatsheet
      </button>
    </section>
  )
}
export default CheatSheet
