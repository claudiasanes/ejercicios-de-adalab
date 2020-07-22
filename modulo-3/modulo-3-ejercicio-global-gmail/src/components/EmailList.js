import React from 'react';
import EmailItem from './EmailItem';

const emails = [
  {
    from: 'Front fest',
    subject: 'Entradas ya a la venta',
    time: '15.27',
  },
  {
    from: 'GitHub',
    subject: 'Adalab/project-i Local store #23',
    time: '16.00',
  },
  {
    from: 'Node Weekly',
    subject: 'Node news',
    time: '21.45',
  },
];

class EmailList extends React.Component {
  render() {
    // const emailsHTML = [];
    // for (let index = 0; index < emails.length; index++) {
    //   emailsHTML.push(
    //     // key es lo mismo que id, un identificador único pero es lo que se usa en react
    //     <tr key={index} className="email">
    //       <span>{emails[index].from}</span>
    //     </tr>
    //   );
    // }

    // este map es lo mismo que el for de arriba pero hecho de otra forma, esto es lo que más se usa
    const result = emails.map((email, index) => {
      return (
        <EmailItem
          key={index}
          from={email.from}
          time={email.time}
          subject={email.subject}
        />
      );
    });

    return (
      <table className="table">
        <tbody>{result}</tbody>
      </table>
    );
  }
}

export default EmailList;

/* 
 En vez de from puedo poner la palabra que mejor represente a lo que quiero meter, simplemente es una "clave: valor", pongo lo que me de la gana
*/

/* <EmailItem
from="Front Fest"
time="15:27"
subject="Entradas ya a la venta"
/>
<EmailItem
from="GitHub"
time="16:40"
subject="Entradas ya a la venta"
/>
<EmailItem
from="Node Weekly"
time="20:45"
subject="Entradas ya a la venta"
/> */
