import React from "react";
import { Link as NavLink } from "react-router-dom";
import moment from "moment";

import {
  UserContainer,
  Hero,
  Info,
  Name,
  Mail,
  Address,
  Date
} from "../../styledComponents";

export default function User({ user, id }) {
  moment.locale();
  let {
    picture: { large: picture },
    name: { first, last, title },
    email,
    location: {
      street: { name: streetName, streetNumber },
      postcode,
      city,
      state,
      country
    },
    dob: { date }
  } = user;
  return (
    <NavLink to={`${id}`}>
      <UserContainer>
        <Hero alt="imie i nazwisko usera" src={picture} />
        <Info>
          <Name>
            {title} {first} {last}
          </Name>
          <Mail>{email} </Mail>
          <Address>
            {streetName} {streetNumber}
            <br />
            {postcode} {city} {state}
            <br />
            {country}
          </Address>
          <Date>{moment(date).format("LL")} </Date>
        </Info>
      </UserContainer>
    </NavLink>
  );
}
