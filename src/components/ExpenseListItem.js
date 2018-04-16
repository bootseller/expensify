import React from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';


const expenseListItem = (props) => (
  <div>
    <Link to={`/edit/${props.id}`}><h3>{props.description}</h3></Link>
    <p>{props.amount}</p>
    <p>{moment(props.createdAt).format('MMMM Do, YYYY')}</p>
  </div >
);

export default expenseListItem;