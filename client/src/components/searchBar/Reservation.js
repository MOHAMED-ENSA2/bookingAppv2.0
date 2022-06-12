import React from 'react'
import './Reservation.css'


function Reservation() {
  return (
    <div className='reservation'>
        <table>
            <tr>
                <td>Adultes</td>
                <td >
                   <div className='counter'>-</div>
                </td>
                <td className='reservation--number'>1</td>
                <td ><div className='counter'>+</div></td>
            </tr>
            <tr>
                <td>Enfants</td>
                <td >
                   <div className='counter'>-</div>
                </td>
                <td className='reservation--number'>1</td>
                <td ><div className='counter'>+</div></td>
            </tr>
            <tr>
                <td>Chambres</td>
                <td >
                    <div className='counter'>-</div>
                </td>
                <td className='reservation--number'>2</td>
                <td ><div className='counter'>+</div></td>
            </tr>
        </table>
    </div>
  )
}

export default Reservation