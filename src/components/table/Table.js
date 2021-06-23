import './Table.scss';

var drivers = [
  {
    name: 'Marcus Lundberg',
    company: 'Aris FC',
    distance: 75044,
    score: 52
  },
  {
    name: 'Marcus Mena Pacheco',
    company: 'Lio LTD',
    distance: 129417,
    score: 95
  },
  {
    name: 'Valentine Ichtertz',
    company: 'LOTS Group',
    distance: 244656,
    score: 67
  },
  {
    name: 'Niklas Rosén',
    company: 'DD Interactive',
    distance: 200000,
    score: 78
  }
];

window.onload = function tableFunction() {

  drivers.forEach(function(driver) {
    var tableRow = document.querySelector('.tableData');
    // console.log(driver)

    var row =
    `<tr>
      <td>${driver.name}</td>
      <td>${driver.company}</td>
      <td>${driver.distance + ' km'}</td>
      <td>${driver.score}</td>
    </tr>`

    tableRow.innerHTML += row;
    //  More = () => {
    //   if (driver.distance >= 200000) {
    //     tableRow.innerHTML += row;
    //   }
    // }
    //  Less = () => {
    //   if (driver.distance < 200000) {
    //     tableRow.innerHTML += row;
    //   }
    // }


  //   function More() {
  //     if (driver.distance >= 200000) {
  //       tableRow.innerHTML += row;
  //     }
  //   }

  // function Less() {
  //   if (driver.distance < 200000) {
  //     tableRow.innerHTML += row;
  //   }
  // }
})
};

export function More() {

  drivers.forEach(function(driver) {
    var tableRow = document.querySelector('.tableData');

    var row =
    `<tr>
      <td>${driver.name}</td>
      <td>${driver.company}</td>
      <td>${driver.distance + ' km'}</td>
      <td>${driver.score}</td>
    </tr>`

    if (driver.distance >= 200000) {
      tableRow.innerHTML += row;
    }
  })
};

export function Less() {

  drivers.forEach(function(driver) {
    var tableRow = document.querySelector('.tableData');

    var row =
    `<tr>
      <td>${driver.name}</td>
      <td>${driver.company}</td>
      <td>${driver.distance + ' km'}</td>
      <td>${driver.score}</td>
    </tr>`

    if (driver.distance < 200000) {
      tableRow.innerHTML += row;
    }
  })
};

const Table = () => {
  return (
    <div className="table" >
      <table>
        <thead>
          <tr>
            <th>Driver</th>
            <th>Company</th>
            <th>Distance</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody className='tableData'>
        </tbody>
      </table>
    </div>
  )
}

// export default {More, Less};
export default Table;