
import Rodape from '../rodape/rodape';
import Cabecalho from '../cabecalho/Cabecalho'; 
import './conteudo.css';

export default function Conteudo() {
  const days = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, '', '', '', ''],
  ];

  return (
    <div className="calendar">
      <Cabecalho />
      <main className="main">
        <h2>Diário:</h2>
        <p>Selecione um dia:</p>
        <table className="tabela">
          <thead>
            <tr>
              <th>Seg</th>
              <th>Ter</th>
              <th>Qua</th>
              <th>Qui</th>
              <th>Sex</th>
              <th>Sáb</th>
              <th>Dom</th>
            </tr>
          </thead>
          <tbody>
            {days.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => (
                  <td key={dayIndex}>{day}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Rodape/>
    </div>
  );
}


